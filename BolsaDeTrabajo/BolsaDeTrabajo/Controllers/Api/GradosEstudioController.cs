using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class GradosEstudioController : ApiController
    {
        private ApplicationDbContext _context;
        public GradosEstudioController()
        {
            _context = new ApplicationDbContext();
        }

        public  IHttpActionResult GetGradosEstudios()
        {
            return Ok(
                _context.GradosEstudios.ToList()
                );
        }

    }
}
