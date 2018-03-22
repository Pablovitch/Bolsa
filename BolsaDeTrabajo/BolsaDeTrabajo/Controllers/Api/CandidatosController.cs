using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using System;
using System.Linq;
using System.Data.Entity;
using System.Web.Http;
using System.Collections.Generic;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class CandidatosController : ApiController
    {
        private Dictionary<string, byte> TiposTelefonos = new Dictionary<string, byte>()
        {
            { "Movil", 1 },
            { "Casa", 2 },
            { "Oficina", 3 }
        };
        private Dictionary<string, int> TiposDirecciones = new Dictionary<string, int>()
        {
            { "Personal", 1 }
        };
        private ApplicationDbContext _Context;
        public CandidatosController()
        {
            _Context = new ApplicationDbContext();
        }

        public IHttpActionResult GetCandidatos()
        {
            var candidatos = _Context.Candidatos
                    .ToList();

            return Ok(candidatos);
        }

        public IHttpActionResult GetCandidato(Guid id)
        {
            var candidato = _Context.Candidatos
                .Include(p=> p.paisNacimiento)                
                .Include(e=> e.estadoNacimiento)                
                .Include(m=> m.municipioNacimiento)
                .SingleOrDefault(c => c.Id == id);

            var candidatoDto = new CandidatoDto();
            candidatoDto.Id = candidato.Id;
            candidatoDto.ApellidoPaterno = candidato.ApellidoPaterno;
            candidatoDto.ApellidoMaterno = candidato.ApellidoMaterno;
            candidatoDto.Nombre = candidato.Nombre;
            candidatoDto.ImgProfileUrl = candidato.ImgProfileUrl;
            candidatoDto.email = _Context.Emails.First(c => c.PersonaId == candidatoDto.Id).email;
            candidatoDto.datospersonales = Mapper.Map<Candidato, DatosPersonales>(candidato); 
            var direccion = _Context.Direcciones
                .Include(p=>p.Pais)
                .Include(e=>e.Estado)
                .Include(m=>m.Municipio)
                .Include(c=>c.Colonia)
                .SingleOrDefault(d => d.PersonaId == candidatoDto.Id);
            candidatoDto.Direccion = Mapper.Map < Direccion, DireccionDto >(direccion);
            candidatoDto.identificaciones = Mapper.Map<Candidato, IdentificacionesDto>(candidato);
            var TiposTelefono = TiposTelefonos["Casa"];
            var telcasa = _Context.Telefonos
                .FirstOrDefault(t => t.PersonaId == candidatoDto.Id && t.TipoTelefonoId == TiposTelefono);
            candidatoDto.datospersonales.telCasa = (telcasa != null) ? telcasa.telefono : null;
            TiposTelefono = TiposTelefonos["Movil"];
            var telcelular = _Context.Telefonos
               .FirstOrDefault(t => t.PersonaId == candidatoDto.Id && t.TipoTelefonoId == TiposTelefono);
            candidatoDto.datospersonales.telCelular = (telcelular != null) ? telcelular.telefono : null;
            TiposTelefono = TiposTelefonos["Oficina"];
            var teloficina = _Context.Telefonos
              .FirstOrDefault(t => t.PersonaId == candidatoDto.Id && t.TipoTelefonoId == TiposTelefono);
            candidatoDto.datospersonales.telOficina = (teloficina != null) ? teloficina.telefono : null;

            var metodosContacto = _Context.FormasContacto.FirstOrDefault(fc => fc.CandidatoId == candidatoDto.Id);
            candidatoDto.datospersonales.CorreoElectronico = metodosContacto.CorreoElectronico;
            candidatoDto.datospersonales.Celular = metodosContacto.Celular;
            candidatoDto.datospersonales.WhatsApp = metodosContacto.WhatsApp;
            candidatoDto.datospersonales.TelLocal = metodosContacto.TelLocal;


            return Ok(candidatoDto);

        }

        [HttpPost]
        public IHttpActionResult CreateCandidato(CandidatoDto candidatoDto)
         {
            var candidatoID=CrearCandidato(candidatoDto);
            candidatoDto.Id = candidatoID;

            var email = new Email(candidatoDto.email, candidatoID);
            _Context.Emails.Add(email);
            _Context.SaveChanges();            

            CreateDireccion(candidatoDto.Direccion, candidatoID); 

            CreateTelefono("+52", candidatoDto.datospersonales.telCasa, TiposTelefonos["Casa"], candidatoID);
            CreateTelefono("+52", candidatoDto.datospersonales.telCelular, TiposTelefonos["Movil"], candidatoID);
            CreateTelefono("+52", candidatoDto.datospersonales.telOficina, TiposTelefonos["Oficina"], candidatoID);

            var metodosContacto = new FormaContacto(candidatoID, candidatoDto.datospersonales.CorreoElectronico, candidatoDto.datospersonales.Celular,
                candidatoDto.datospersonales.WhatsApp, candidatoDto.datospersonales.TelLocal);
            _Context.FormasContacto.Add(metodosContacto);
            _Context.SaveChanges();

            return Created(new Uri(Request.RequestUri + "/" + candidatoID), candidatoDto);
        }
     
        [HttpPut]
        public IHttpActionResult UpdateCandidato(Guid id, CandidatoDto candidatoDto)
        {
            UpdateCandidato(candidatoDto, id);     

            UpdateEmail(candidatoDto.email, id);  
            UpdateDireccion(candidatoDto.Direccion, id);

            UpdateTelefono(id, candidatoDto.datospersonales.telCasa, TiposTelefonos["Casa"]);
            UpdateTelefono(id, candidatoDto.datospersonales.telCelular, TiposTelefonos["Movil"]);
            UpdateTelefono(id, candidatoDto.datospersonales.telOficina, TiposTelefonos["Oficina"]);              

            UpdateFormaContacto(id, candidatoDto.datospersonales.CorreoElectronico, candidatoDto.datospersonales.Celular, candidatoDto.datospersonales.WhatsApp, candidatoDto.datospersonales.TelLocal);
           

            return Ok();
        }

      

        [HttpDelete]
        public IHttpActionResult DeleteCandidato(Guid id)
        {
            var candidatoInDB = _Context.Candidatos.SingleOrDefault(c => c.Id == id);
            if (candidatoInDB == null)
                return NotFound();

            var emailInDB = _Context.Emails.SingleOrDefault(c => c.PersonaId == id);
            _Context.Emails.Remove(emailInDB);
            _Context.SaveChanges();
            var direccioInDB = _Context.Direcciones.SingleOrDefault(c => c.PersonaId == id);
            _Context.Direcciones.Remove(direccioInDB);
            _Context.SaveChanges();
            var formaContactoInDB = _Context.FormasContacto.SingleOrDefault(c => c.CandidatoId == id);
            _Context.FormasContacto.Remove(formaContactoInDB);
            _Context.SaveChanges();

            var telefonosInDB = _Context.Telefonos.RemoveRange(_Context.Telefonos.Where(c => c.PersonaId == id));
            _Context.SaveChanges();

            _Context.Candidatos.Remove(candidatoInDB);
            _Context.SaveChanges();

            return Ok();
        }

        private void CreateTelefono(string clavePais, string telefono, int tipoTelefono, Guid idPersona)
        {
            if (string.IsNullOrEmpty(telefono))
                return;

            var Telefono=  new Telefono(clavePais, telefono, Convert.ToByte(tipoTelefono), idPersona);
            _Context.Telefonos.Add(Telefono);
            _Context.SaveChanges();


        }

        private Guid CrearCandidato(CandidatoDto candidatoDto)
        {
            var candidato = Mapper.Map<DatosPersonales, Candidato>(candidatoDto.datospersonales);
            candidato.Nombre = candidatoDto.Nombre.ToUpper();
            candidato.ApellidoPaterno = candidatoDto.ApellidoPaterno.ToUpper();
            candidato.ApellidoMaterno = candidatoDto.ApellidoMaterno.ToUpper();
            candidato.FechaNacimiento = candidatoDto.datospersonales.FechaNacimiento;
            candidato.tieneLicenciaConducir = candidatoDto.identificaciones.tieneLicenciaConducir;
            candidato.TipoLicenciaId = candidato.tieneLicenciaConducir ? candidatoDto.identificaciones.TipoLicenciaId : null;
            candidato.RFC = candidatoDto.identificaciones.RFC;
            candidato.CURP = candidatoDto.identificaciones.CURP;
            candidato.NSS = candidatoDto.identificaciones.NSS;
            candidato.ImgProfileUrl = candidatoDto.ImgProfileUrl;
             _Context.Candidatos.Add(candidato);
            _Context.SaveChanges();

            return candidato.Id;

        }

        private void CreateDireccion(DireccionDto direccionDto, Guid candidatoId)
        {
            var direccion = Mapper.Map<DireccionDto, Direccion>(direccionDto);
            direccion.Id = Guid.NewGuid();       
            direccion.esMoral = false;
            direccion.TipoDireccionId = TiposDirecciones["Personal"]; 
            direccion.PersonaId = candidatoId;
            _Context.Direcciones.Add(direccion);
            _Context.SaveChanges(); 
        }

        private void UpdateDireccion(DireccionDto direccionDto, Guid id)
        {
            Direccion direccion = _Context.Direcciones.SingleOrDefault(d => d.PersonaId == id);
            var DireccionId = direccion.Id;
            Mapper.Map(direccionDto, direccion);
            direccion.Id = DireccionId;
            _Context.Entry(direccion).State = EntityState.Modified;
            _Context.SaveChanges();


        }

        private void UpdateEmail(string email, Guid idCandidato)
        {
            var emailInDB = _Context.Emails.SingleOrDefault(e => e.PersonaId == idCandidato);
            emailInDB.email = email;
            emailInDB.PersonaId = idCandidato;
            _Context.Emails.Attach(emailInDB);
            _Context.Entry(emailInDB).State = EntityState.Modified;
            _Context.SaveChanges();
           
        }

       private void UpdateFormaContacto(Guid candidatoId, bool correoElectronico, bool celular, bool whatsApp, bool telLocal)
        {
            var formasContacto = _Context.FormasContacto.SingleOrDefault(fc => fc.CandidatoId == candidatoId);
            formasContacto.CorreoElectronico = correoElectronico;
            formasContacto.Celular = celular;
            formasContacto.WhatsApp = whatsApp;
            formasContacto.TelLocal = telLocal;
            _Context.FormasContacto.Attach(formasContacto);
            _Context.Entry(formasContacto).State = EntityState.Modified;
            _Context.SaveChanges();
        }

        private void UpdateTelefono(Guid candidatoId, string telefono, int tipoTelefono)
        {
            var telephone = _Context.Telefonos.SingleOrDefault(e => e.PersonaId == candidatoId && e.TipoTelefonoId == tipoTelefono);
            if (telefono == null && telephone!=null)
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

        private Guid UpdateCandidato(CandidatoDto candidatoDto, Guid candidatoId)
        {
            var candidato = Mapper.Map<DatosPersonales, Candidato>(candidatoDto.datospersonales);
            candidato.Nombre = candidatoDto.Nombre.ToUpper();
            candidato.ApellidoPaterno = candidatoDto.ApellidoPaterno.ToUpper();
            candidato.ApellidoMaterno = candidatoDto.ApellidoMaterno.ToUpper();
            candidato.tieneLicenciaConducir = candidatoDto.identificaciones.tieneLicenciaConducir;
            candidato.TipoLicenciaId = candidato.tieneLicenciaConducir ? candidatoDto.identificaciones.TipoLicenciaId : null;
            candidato.RFC = candidatoDto.identificaciones.RFC;
            candidato.CURP = candidatoDto.identificaciones.CURP;
            candidato.NSS = candidatoDto.identificaciones.NSS;
            candidato.ImgProfileUrl = candidatoDto.ImgProfileUrl;
            candidato.Id = candidatoId;
            _Context.Entry(candidato).State = EntityState.Modified;
            _Context.SaveChanges();

            return candidato.Id;

        }
    }
}
