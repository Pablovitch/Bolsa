using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class CarrerasController : ApiController
    {
        private ApplicationDbContext _context;
        public CarrerasController()
        {
            _context = new ApplicationDbContext();
        }
        public IHttpActionResult GetCarreras()
        {
            return Ok();
        }
        public IHttpActionResult GetCarreras(string query)
        {
            var carreras = _context.Carreras.ToList()
                        .Where(c => c.carrera.ToLower().Contains(query.ToLower()) ||
                        c.carrera.ToLower().StartsWith(query.ToLower()));
            return Ok(carreras);         


        }
    }
}
