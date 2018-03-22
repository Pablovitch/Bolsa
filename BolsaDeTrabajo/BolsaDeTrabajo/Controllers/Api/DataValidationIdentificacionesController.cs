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
    public class DataValidationIdentificacionesController : ApiController
    {
        private ApplicationDbContext _Context;
        public DataValidationIdentificacionesController()
        {
            _Context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetDataValidation(Guid CandidatoId)
        {
            var DataValidation = Mapper.Map<Candidato, DataValidationDto>(
                _Context.Candidatos
                .Include(p=>p.paisNacimiento)
                .Include(e=> e.estadoNacimiento)
                .SingleOrDefault(c => c.Id == CandidatoId));
            return Ok(DataValidation);
        }
         
    }
}
