using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class DocumentosValidadoresController : ApiController
    {
        private ApplicationDbContext _context;
        public DocumentosValidadoresController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult GetDocumentosValidadores()
        {
            return Ok(_context.DocumentosValidadores.ToList());
        }
    }
}
