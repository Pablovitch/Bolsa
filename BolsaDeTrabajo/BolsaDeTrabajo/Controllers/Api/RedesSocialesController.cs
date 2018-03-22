using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class RedesSocialesController : ApiController
    {
        private ApplicationDbContext _context;
        public RedesSocialesController()
        {
            _context = new ApplicationDbContext();
        }

       [HttpGet]
       public IHttpActionResult GetRedesSociales(Guid candidatoId)
        {
            var redesSociales = _context.RedesSociales
                .Where(r => r.PersonaId == candidatoId)
                .ToList();

            return Ok(redesSociales);
        }

        [HttpPost]
        public IHttpActionResult AddRedesSociales(Guid candidatoId, List<RedSocial> redesSociales)
        {
            if (redesSociales == null) return Ok();

            _context.RedesSociales.RemoveRange(
                _context.RedesSociales.Where(rs => rs.PersonaId == candidatoId));
            _context.SaveChanges();

            _context.RedesSociales.AddRange(redesSociales);
            _context.SaveChanges();

            return Ok();
                
        }
    }
}
