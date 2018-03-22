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
    public class FormacionController : ApiController
    {
        private ApplicationDbContext _context;
        public FormacionController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult GetFormaciones(Guid perfilCandidatoId)
        {
            if (_context.Formaciones.Any(c => c.PerfilCandidatoId == perfilCandidatoId))
            {
                var formaciones = _context.Formaciones
                                    .Include(ie=>ie.InstitucionEducativa)   
                                    .Include(c=>c.Carrera)                              
                                    .Where(f => f.PerfilCandidatoId == perfilCandidatoId)
                                    .ToList();
                return Ok(formaciones);
            }
            return Ok();

        }

        [HttpPost]
        public IHttpActionResult AddFormacion(Formacion formacion)
        {
            formacion.Id = Guid.NewGuid();
            _context.Formaciones.Add(formacion);
            _context.SaveChanges();
            return Ok(formacion);
        }

        [HttpPut]
        public IHttpActionResult UpdateFormacion(Formacion formacion)
        {
            _context.Entry(formacion).State = EntityState.Modified;
            _context.SaveChanges();
            return Ok(formacion);
        }

        [HttpDelete]
        public IHttpActionResult DeleteFormacion(Guid idFormacion)
        {
            var formacion = _context.Formaciones.SingleOrDefault(f => f.Id == idFormacion);
            _context.Formaciones.Remove(formacion);
            _context.SaveChanges();
            return Ok();
        }
    }
}
