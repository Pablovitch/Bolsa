using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using System;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class DatosContactoController : ApiController
    {
        private ApplicationDbContext _Context;
        public DatosContactoController()
        {
            _Context = new ApplicationDbContext();
        }

        [HttpPost]
        public IHttpActionResult CreateCandidato(string userId, DatosContactoDto candidatoDto)
        {
            var candidato = Mapper.Map<DatosContactoDto, Candidato>(candidatoDto);
            candidato.Id = Guid.NewGuid();
            _Context.Candidatos.Add(candidato);
            _Context.SaveChanges();
            candidatoDto.Id = candidato.Id;

            if (!string.IsNullOrEmpty(candidatoDto.email))
            {
                var email = new Email(candidatoDto.email, candidato.Id);
                _Context.Emails.Add(email);
                _Context.SaveChanges();
            }

            if (!string.IsNullOrEmpty(candidatoDto.Telefono))
            {
                var Telefono = new Telefono("+52", candidatoDto.Telefono, candidatoDto.TipoTelefonoId, candidato.Id);
                _Context.Telefonos.Add(Telefono);
                _Context.SaveChanges();
            }

            var usuario = _Context.AspNetUsers.SingleOrDefault(u => u.Id == userId);
            usuario.IdPersona = candidato.Id;
            _Context.Entry(usuario).State = EntityState.Modified;
            _Context.SaveChanges();

            var formulariosIniciales = new FormulariosIniciales();
            formulariosIniciales.CandidatoId = candidato.Id;
            formulariosIniciales.Paso = 1;
            _Context.FormulariosIniciales.Add(formulariosIniciales);
            _Context.SaveChanges();

            return Created(new Uri(Request.RequestUri + "/" + candidato.Id), candidato.Id);
        }


        [HttpGet]
        public IHttpActionResult ExistCandidato(string curp)
        {
            if (_Context.Candidatos.Any(c => c.CURP == curp))
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }

    }
}
