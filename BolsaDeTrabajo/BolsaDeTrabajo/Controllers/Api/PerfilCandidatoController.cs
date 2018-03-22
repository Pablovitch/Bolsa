using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class PerfilCandidatoController : ApiController
    {
        private ApplicationDbContext _context;
        public PerfilCandidatoController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult GetPerfilCandidato(Guid candidatoId)
        {
            
            if(_context.PerfilCandidato.Any(p=>p.CandidatoId==candidatoId))
            {
                var perfilId = _context.PerfilCandidato.SingleOrDefault(p => p.CandidatoId == candidatoId).Id;
                return Ok(perfilId);
            }

            return Ok();
        }

        [HttpPost]
        public IHttpActionResult CreatePerfilCandidato( PerfilCandidato perfil)
        {
           if( _context.PerfilCandidato.Any(p => p.Id == perfil.Id))
            {
                _context.PerfilCandidato.Remove(_context.PerfilCandidato.Single(p => p.Id == perfil.Id));
               var x = _context.SaveChanges();
            }
            perfil.Id =  Guid.NewGuid();
            
            _context.PerfilCandidato.Add(perfil);
            _context.SaveChanges();
            return Created(new Uri(Request.RequestUri + "/" + perfil.CandidatoId), perfil);
        }

    }
}
