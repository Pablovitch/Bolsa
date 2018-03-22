using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class IdiomasController : ApiController
    {
        private ApplicationDbContext _context;
        public IdiomasController()
        {

            _context = new ApplicationDbContext();
        }
        public IHttpActionResult GetIdiomas()
        {

            return Ok();
        }

        public IHttpActionResult GetIdiomas(string query)
        {
            //var otro = _context.Idiomas
            //    .First(i => i.idioma.ToLower() == "otro");
            var idiomas = _context.Idiomas.ToList()
                .Where(
                i => i.idioma.ToLower() == "otro" &&
                i.idioma.ToLower().Contains(query.ToLower()) ||
                i.idioma.ToLower().StartsWith(query.ToLower()));

            

            return Ok(idiomas);
        }
    }
}
