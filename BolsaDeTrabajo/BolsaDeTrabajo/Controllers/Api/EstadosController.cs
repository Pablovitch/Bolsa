using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class EstadosController : ApiController
    {
        private ApplicationDbContext _context;
        public EstadosController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult getEstados()
        {
            var estados = _context.Estados.ToList()
                            .Select(Mapper.Map<Estado, EstadoDto>);

            return Ok(estados);
        }

        public IHttpActionResult getEstados(string query)
        {
            var paises = _context.Estados.ToList()
                .Where(
                p => p.estado.ToLower().StartsWith(query.ToLower()) || p.estado.ToLower().Contains(query.ToLower()))
                .Select(Mapper.Map<Estado, EstadoDto>);

            return Ok(paises);
        }
    }
}
