using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class PaisesController : ApiController
    {
        private ApplicationDbContext _context;
        public PaisesController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult getPaises()
        {
            var paises = _context.Paises.ToList()
                                    .Select(Mapper.Map<Pais, PaisDto>);
            return Ok(paises);
        }

        public IHttpActionResult getPaises(string query)
        {
            var paises = _context.Paises.ToList()
                .Where(
                p => p.pais.ToLower().StartsWith(query.ToLower()) || p.pais.ToLower().Contains(query.ToLower()))
                .Select(Mapper.Map<Pais, PaisDto>);

            return Ok(paises);
        }
    }
}
