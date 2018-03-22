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
    public class ExperienciaController : ApiController
    {
        public ApplicationDbContext _context;
        public ExperienciaController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetExperiencias(Guid perfilCandidatoId)
        { 
            if (_context.ExperienciasProfesionales.Any(c => c.PerfilCandidatoId == perfilCandidatoId))
            {
                var experiencias = _context.ExperienciasProfesionales 
                                        .Include(a=>a.Area) 
                                        .Where(e => e.PerfilCandidatoId == perfilCandidatoId).ToList();
                return Ok(experiencias);
            }
            return Ok();
        }

        [HttpPost]
        public IHttpActionResult AddExpereincia(ExperienciaProfesional experiencia)
        {
                experiencia.Id = Guid.NewGuid();
                _context.ExperienciasProfesionales.Add(experiencia);
                _context.SaveChanges();

            return Ok(experiencia); 
        }

        [HttpPut]
        public IHttpActionResult UpdateExperiencia(ExperienciaProfesional experiencia)
        {
          
            _context.Entry(experiencia).State = EntityState.Modified;
            _context.SaveChanges();

            return Ok(experiencia);
        }

        [HttpDelete]
        public IHttpActionResult DeleteExperiencia(Guid idExperiencia)
        {
            var experiencia = _context.ExperienciasProfesionales.SingleOrDefault(e => e.Id == idExperiencia);
            _context.ExperienciasProfesionales.Remove(experiencia);
            _context.SaveChanges();
            return Ok();
        }
    }
}
