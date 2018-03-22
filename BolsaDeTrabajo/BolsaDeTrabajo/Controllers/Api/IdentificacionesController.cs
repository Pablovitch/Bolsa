using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class IdentificacionesController : ApiController
    {
        private ApplicationDbContext _Context;
        public IdentificacionesController()
        {
            _Context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetIdentificaciones(Guid CandidatoId)
        {
            var identificaciones = Mapper.Map<Candidato, IdentificacionesDto>(_Context.Candidatos.SingleOrDefault(c => c.Id == CandidatoId));

            return Ok(identificaciones);
        }

        [HttpPut]
        public IHttpActionResult UpdateIdentificaciones(IdentificacionesDto identificaciones, Guid CandidatoId)
        {
            var candidato = _Context.Candidatos.SingleOrDefault(c => c.Id == CandidatoId);
            candidato.RFC = identificaciones.RFC;
            candidato.CURP = identificaciones.CURP;
            candidato.NSS = identificaciones.NSS;
            candidato.tieneLicenciaConducir = identificaciones.tieneLicenciaConducir;
            candidato.TipoLicenciaId = identificaciones.TipoLicenciaId;
            _Context.Candidatos.Attach(candidato);
            _Context.Entry(candidato).State = EntityState.Modified;
            _Context.SaveChanges();

            return Ok();
        }
    }
}
