using AutoMapper;
using BolsaDeTrabajo.Models;
using BolsaDeTrabajo.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class DatosPersonalesController : ApiController
    {
        private Dictionary<string, byte> TiposTelefonos = new Dictionary<string, byte>()
        {
            { "Movil", 1 },
            { "Casa", 2 },
            { "Oficina", 3 }
        };
        private ApplicationDbContext _Context;
        public DatosPersonalesController()
        {
            _Context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetDatosPersonales(Guid CandidatoId)
        {
            var candidato = _Context.Candidatos
               .Include(p => p.paisNacimiento)
               .Include(e => e.estadoNacimiento)
               .Include(m => m.municipioNacimiento)
               .SingleOrDefault(c => c.Id == CandidatoId);

            var datospersonalesDto = Mapper.Map<Candidato, DatosPersonales>(candidato);
            var TiposTelefono = TiposTelefonos["Casa"];
            var telcasa = _Context.Telefonos
                .FirstOrDefault(t => t.PersonaId == CandidatoId && t.TipoTelefonoId == TiposTelefono);
            datospersonalesDto.telCasa = (telcasa != null) ? telcasa.telefono : null;
            TiposTelefono = TiposTelefonos["Movil"];
            var telcelular = _Context.Telefonos
               .FirstOrDefault(t => t.PersonaId == CandidatoId && t.TipoTelefonoId == TiposTelefono);
            datospersonalesDto.telCelular = (telcelular != null) ? telcelular.telefono : null;
            TiposTelefono = TiposTelefonos["Oficina"];
            var teloficina = _Context.Telefonos
              .FirstOrDefault(t => t.PersonaId == CandidatoId && t.TipoTelefonoId == TiposTelefono);
            datospersonalesDto.telOficina = (teloficina != null) ? teloficina.telefono : null;

            var metodosContacto = _Context.FormasContacto.FirstOrDefault(fc => fc.CandidatoId == CandidatoId);
                if(metodosContacto != null)
                 {
                    datospersonalesDto.CorreoElectronico = metodosContacto.CorreoElectronico ;
                    datospersonalesDto.Celular =  metodosContacto.Celular;
                    datospersonalesDto.WhatsApp =  metodosContacto.WhatsApp;
                    datospersonalesDto.TelLocal =  metodosContacto.TelLocal;
                 }
                else
                 {
                    datospersonalesDto.CorreoElectronico =  true;
                    datospersonalesDto.Celular =  false;
                    datospersonalesDto.WhatsApp = false;
                    datospersonalesDto.TelLocal =  false;
                 }


            return Ok(datospersonalesDto);
        }

        [HttpPut]
        public IHttpActionResult UpdateDatosGenerales(Guid CandidatoId, DatosPersonales datosPersonalesDto)
        {
            var candidato = _Context.Candidatos.SingleOrDefault(c => c.Id == CandidatoId);
            candidato.PaisNacimientoId = datosPersonalesDto.PaisNacimientoId;
            candidato.EstadoNacimientoId = datosPersonalesDto.EstadoNacimientoId;
            candidato.MunicipioNacimientoId = datosPersonalesDto.MunicipioNacimientoId;
            candidato.CodigoPostal = datosPersonalesDto.CodigoPostal;
            candidato.FechaNacimiento = datosPersonalesDto.FechaNacimiento;
            candidato.GeneroId = datosPersonalesDto.GeneroId;
            candidato.EstadoCivilId = datosPersonalesDto.EstadoCivilId;
            candidato.esDiscapacitado = datosPersonalesDto.esDiscapacitado;
            candidato.TipoDiscapacidadId = datosPersonalesDto.TipoDiscapacidadId;
            candidato.puedeViajar = datosPersonalesDto.puedeViajar;
            candidato.puedeRehubicarse = datosPersonalesDto.puedeRehubicarse;
            _Context.Entry(candidato).State = EntityState.Modified;
            _Context.SaveChanges();


            UpdateTelefono(CandidatoId, datosPersonalesDto.telCasa, TiposTelefonos["Casa"]);
            UpdateTelefono(CandidatoId, datosPersonalesDto.telCelular, TiposTelefonos["Movil"]);
            UpdateTelefono(CandidatoId, datosPersonalesDto.telOficina, TiposTelefonos["Oficina"]);

            UpdateFormaContacto(CandidatoId, datosPersonalesDto.CorreoElectronico, datosPersonalesDto.Celular, datosPersonalesDto.WhatsApp, datosPersonalesDto.TelLocal);


            return Ok();
        }
        private void UpdateFormaContacto(Guid candidatoId, bool correoElectronico, bool celular, bool whatsApp, bool telLocal)
        {
            var formasContacto = _Context.FormasContacto.SingleOrDefault(fc => fc.CandidatoId == candidatoId);
            if (formasContacto != null)
            {
                formasContacto.CorreoElectronico = correoElectronico;
                formasContacto.Celular = celular;
                formasContacto.WhatsApp = whatsApp;
                formasContacto.TelLocal = telLocal;
                _Context.FormasContacto.Attach(formasContacto);
                _Context.Entry(formasContacto).State = EntityState.Modified;
            }
           else
            {
                _Context.FormasContacto.Add(new FormaContacto(candidatoId, correoElectronico, celular, whatsApp, telLocal));
            }

            _Context.SaveChanges();
        }
        private void UpdateTelefono(Guid candidatoId, string telefono, int tipoTelefono)
        {
            var telephone = _Context.Telefonos.SingleOrDefault(e => e.PersonaId == candidatoId && e.TipoTelefonoId == tipoTelefono);
            if (telefono == null && telephone != null)
            {
                _Context.Telefonos.Remove(telephone);
                _Context.SaveChanges();

            }
            else if (telefono != null && telephone != null)
            {
                var tel = _Context.Telefonos.FirstOrDefault(e => e.PersonaId == candidatoId && e.TipoTelefonoId == tipoTelefono);
                tel.telefono = telefono;
                _Context.Telefonos.Attach(tel);
                _Context.Entry(tel).State = EntityState.Modified;
                _Context.SaveChanges();
            }
            else if (telefono != null)
            {
                CreateTelefono("+52", telefono, tipoTelefono, candidatoId);
            }
        }

        private void CreateTelefono(string clavePais, string telefono, int tipoTelefono, Guid idPersona)
        {
            if (string.IsNullOrEmpty(telefono))
                return;

            var Telefono = new Telefono(clavePais, telefono, Convert.ToByte(tipoTelefono), idPersona);
            _Context.Telefonos.Add(Telefono);
            _Context.SaveChanges();


        }
    }
}
