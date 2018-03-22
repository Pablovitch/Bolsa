using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class YearsController : ApiController
    {
        private ApplicationDbContext _context;
        public YearsController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult GetYears()
        {
            return Ok(_context.Years.ToList());
        }

    }
}
