using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class MonthsController : ApiController
    {
        private ApplicationDbContext _context;
        public MonthsController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult GetMonths()
        {
            return Ok(
               _context.Months.ToList()
                );
        }
    }
}
