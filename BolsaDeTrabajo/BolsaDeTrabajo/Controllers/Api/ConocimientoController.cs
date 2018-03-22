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
    public class ConocimientoController : ApiController
    {
        private ApplicationDbContext _context;
        public ConocimientoController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetConocimientos(Guid PerfilCandidatoId)
        {
            if(_context.Conocimientos.Any(c=>c.PerfilCandidatoId == PerfilCandidatoId))
            { 
            var conocimientos = _context.Conocimientos
                                .Include("InstitucionEducativa")
                                .Where(c => c.PerfilCandidatoId == PerfilCandidatoId)
                                .ToList();

            return Ok(conocimientos);
            }

            return Ok();
        }

        [HttpPost]
        public IHttpActionResult AddConocimiento(ConocimientoOHabilidad conocimiento)
        {
            conocimiento.Id = Guid.NewGuid();
            _context.Conocimientos.Add(conocimiento);
            _context.SaveChanges();

            return Ok(conocimiento);
        }

        [HttpPut]
        public IHttpActionResult UpdateConocimiento(ConocimientoOHabilidad conocimiento)
        {
            //_context.Conocimientos.Attach(conocimiento);
            _context.Entry(conocimiento).State = EntityState.Modified;
            _context.SaveChanges();

            return Ok(conocimiento);
        }

         [HttpDelete]
         public IHttpActionResult DeleteConocimiento(Guid idConocimiento)
        {
            var conocimiento = _context.Conocimientos.SingleOrDefault(c => c.Id == idConocimiento);
            _context.Conocimientos.Remove(conocimiento);
            _context.SaveChanges();
            return Ok();
        }
    }
}
