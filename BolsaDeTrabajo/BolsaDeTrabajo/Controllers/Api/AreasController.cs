using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class AreasController : ApiController
    {
        private ApplicationDbContext _context;
        public AreasController()
        {
            _context = new ApplicationDbContext();
        }
        public IHttpActionResult GetAreas()
        {
            return Ok();
        }
        public IHttpActionResult GetAreas(string query)
        {
            query = query.ToLower();
            var areas = _context.Areas.ToList()
                        .Where(a => a.Nombre.ToLower().Contains(query) ||
                                    a.Nombre.ToLower().StartsWith(query));
            return Ok(areas);
        }
    }
}
