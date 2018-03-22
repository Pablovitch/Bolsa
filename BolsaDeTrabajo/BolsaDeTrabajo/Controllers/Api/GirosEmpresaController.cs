using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class GirosEmpresaController : ApiController
    {
        private ApplicationDbContext _context;
        public GirosEmpresaController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult GetGirosEmpresas()
        {
            return Ok(_context.GirosEmpresas.ToList());
        }
    }
}
