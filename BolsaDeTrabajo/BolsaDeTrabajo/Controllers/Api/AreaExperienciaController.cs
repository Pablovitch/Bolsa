using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class AreaExperienciaController : ApiController
    {
        private ApplicationDbContext _context;
        public AreaExperienciaController()
        {
            _context = new ApplicationDbContext();
        }
        public IHttpActionResult GetAreasExperiencia()
        {
            return Ok();
        }
        public IHttpActionResult GetAreasExperiencia(string query)
       {
           var areasExperiencia= _context.AreasExperiencia.ToList()
                .Where(a =>
                a.areaExperiencia.ToLower().StartsWith(query.ToLower()) || 
                a.areaExperiencia.ToLower().Contains(query.ToLower()));

            return Ok(areasExperiencia);
        }
    }
}
