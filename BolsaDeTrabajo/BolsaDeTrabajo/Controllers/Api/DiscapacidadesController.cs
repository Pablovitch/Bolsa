using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class DiscapacidadesController : ApiController
    {
        private ApplicationDbContext _Context;
        public DiscapacidadesController()
        {
            _Context = new ApplicationDbContext();
        }

        public IHttpActionResult getDiscapacidades()
        {
            var discapacidades = _Context.TiposDiscapacidades.ToList();

            return Ok(discapacidades);
        }
    }
}
