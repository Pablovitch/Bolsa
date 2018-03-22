using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class CertificacionController : ApiController
    {
        private ApplicationDbContext _context;
        public CertificacionController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetCertificaciones(Guid PerfilCandidatoId)
        { 
            if (_context.Certificaciones.Any(c => c.PerfilCandidatoId == PerfilCandidatoId))
            {
                var certificaciones = _context.Certificaciones
                                    .Where(c => c.PerfilCandidatoId == PerfilCandidatoId).ToList();

                return Ok(certificaciones);
            }
            return Ok();        
        }

        [HttpPost]
        public IHttpActionResult AddCertificacion(Certificacion certificacion)
        {
            certificacion.Id = Guid.NewGuid();
            _context.Certificaciones.Add(certificacion);
            _context.SaveChanges();

            return Ok(certificacion);
        }

        [HttpPut]
        public IHttpActionResult UpdateCertificacion(Certificacion certificacion)
        {
            _context.Entry(certificacion).State = EntityState.Modified;
            _context.SaveChanges();

            return Ok(certificacion);
        }

       [HttpDelete]
       public IHttpActionResult DeleteCertificacion(Guid idCertificacion)
        {
            var certificacion = _context.Certificaciones.SingleOrDefault(c => c.Id == idCertificacion);
            _context.Certificaciones.Remove(certificacion);
            _context.SaveChanges();

            return Ok();
        }
    }
}
