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
    public class PerfilIdiomaController : ApiController
    {
        private ApplicationDbContext _context;
        public PerfilIdiomaController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetIdiomas(Guid PerfilCandidatoId)
        {
            if (_context.PerfilesIdiomas.Any(c => c.PerfilCandidatoId == PerfilCandidatoId))
            {
                var idiomas = _context.PerfilesIdiomas
                                    .Include("Idioma")
                                    .Where(i => i.PerfilCandidatoId == PerfilCandidatoId)
                                    .ToList();
                return Ok(idiomas);
            }

            return Ok();
        }

        [HttpPost]
        public IHttpActionResult AddPerfilIdioma(PerfilIdioma idioma)
        {
            idioma.Id = Guid.NewGuid();
            _context.PerfilesIdiomas.Add(idioma);
            _context.SaveChanges();
            return Ok(idioma);
        }

        [HttpPut]
        public IHttpActionResult UpdatePerfilIdioma(PerfilIdioma idioma)
        {
            _context.Entry(idioma).State = EntityState.Modified;
            _context.SaveChanges();
            return Ok(idioma);
        }

        [HttpDelete]
        public IHttpActionResult DeletePerfilIdioma(Guid idIdioma)
        {
            var idioma = _context.PerfilesIdiomas.SingleOrDefault(i => i.Id == idIdioma);
            _context.PerfilesIdiomas.Remove(idioma);
            _context.SaveChanges();
            return Ok();
        }
    }
}
