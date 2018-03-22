using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class NivelesController : ApiController
    {
        private ApplicationDbContext _context;
        public NivelesController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult GetNiveles()
        {
            var niveles = _context.Niveles.ToList();

            return Ok(niveles);
        }
    }
}
