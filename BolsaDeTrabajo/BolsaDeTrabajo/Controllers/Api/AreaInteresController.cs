using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class AreaInteresController : ApiController
    {
        private ApplicationDbContext _context;
        public AreaInteresController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult GetAreasInteres()
        {             
            return Ok(_context.AreasInteres.ToList());
        }
    }
}
