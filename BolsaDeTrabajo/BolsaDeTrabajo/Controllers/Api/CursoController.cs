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
    public class CursoController : ApiController
    {
        private ApplicationDbContext _context;
        public CursoController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetCursos(Guid PerfilCandidatoId)
        {
            if (_context.Cursos.Any(c => c.PerfilCandidatoId == PerfilCandidatoId))
            {
                var cursos = _context.Cursos
                        .Include("InstitucionEducativa")
                        .Where(c => c.PerfilCandidatoId == PerfilCandidatoId)
                        .ToList();
                return Ok(cursos);
            }
            return Ok();

        }

        [HttpPost]
        public IHttpActionResult AddCurso(Curso curso)
        {
            curso.Id = Guid.NewGuid();
            _context.Cursos.Add(curso);
            _context.SaveChanges();

            return Ok(curso);
        }

        [HttpPut]
        public IHttpActionResult UpdateCurso(Curso curso)
        {
            _context.Entry(curso).State = EntityState.Modified;
            _context.SaveChanges();

            return Ok(curso);
        }

        [HttpDelete]
        public IHttpActionResult DeleteCurso(Guid idCurso)
        {
            var curso = _context.Cursos.SingleOrDefault(c => c.Id == idCurso);
            _context.Cursos.Remove(curso);
            _context.SaveChanges();
            return Ok();
        }
    }
}
