using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class EstadosCivilesController : ApiController
    {
        private ApplicationDbContext _context;
        public EstadosCivilesController()
        {
            _context = new ApplicationDbContext();
        }
        //GET /api/estadosCiviles
        public IHttpActionResult GetEstadosCiviles()
        {
            var estadosCiviles = _context.EstadosCiviles.ToList()
                                    .Select(Mapper.Map<EstadoCivil, EstadoCivilDto>);

            return Ok(estadosCiviles);

        }
    }
}