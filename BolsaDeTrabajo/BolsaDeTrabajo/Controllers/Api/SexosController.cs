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
    public class SexosController : ApiController
    {
        private ApplicationDbContext _context;
        public SexosController()
        {
            _context = new ApplicationDbContext();
        }
        //GET /api/sexos
        public IHttpActionResult GetSexos()
        {
            var generos = _context.Generos.ToList()
                                    .Select(Mapper.Map<Genero, GeneroDto>);

            return Ok(generos);

        }
    }
}
