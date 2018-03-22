using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class InstitucionEducativaController : ApiController
    {
        private ApplicationDbContext _context;
        public InstitucionEducativaController()
        {
            _context = new ApplicationDbContext();
        } 

        public IHttpActionResult GetInstitucionesEducativas()
        {
            return Ok();
        }
        public IHttpActionResult GetInstitucionesEducativas(string query)
        {
            //var instituciones = new List<InstitucionEducativa>();
             var instituciones = _context.InstitucionesEducativas
                            .Where(
                ie => ie.institucionEducativa.ToLower().Contains(query.ToLower())||
                    ie.institucionEducativa.ToLower().StartsWith(query.ToLower())
                ).ToList();
            return Ok(instituciones);
        }
    }
}
