using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class EstadosEstudioController : ApiController
    {
        private ApplicationDbContext _context;
        public EstadosEstudioController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult GetEstadosEstudio()
        {
            return Ok(
                _context.EstadosEstudios.ToList()
                );
        }
    }
}
