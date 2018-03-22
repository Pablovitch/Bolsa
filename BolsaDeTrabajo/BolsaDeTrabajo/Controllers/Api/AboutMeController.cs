using AutoMapper;
using BolsaDeTrabajo.Dtos;
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
    public class AboutMeController : ApiController
    {
        private ApplicationDbContext _context;
        public AboutMeController()
        {
            _context = new ApplicationDbContext();
        }
        
        [HttpGet]
        public IHttpActionResult GetAboutMe(Guid PerfilCandidatoId)
        {
            if (_context.AcercaDeMi.Any(c => c.PerfilCandidatoId == PerfilCandidatoId))
            {
                var aboutMe = _context.AcercaDeMi
                    .Include(ae=>ae.AreaExperiencia)
                    .Include(ai=>ai.AreaInteres)
                    .Include(pe=>pe.PerfilExperiencia)
                           .SingleOrDefault(about => about.PerfilCandidatoId == PerfilCandidatoId);
                return Ok(aboutMe);
            }

            return Ok();

        }

        [HttpPost]
        public IHttpActionResult AddAboutMe(AboutMeDto acercaDeMi)
        {
            var aboutMe = Mapper.Map<AboutMeDto, AboutMe>(acercaDeMi);
            aboutMe.Id = Guid.NewGuid();
            var perfilCandidato = new PerfilCandidato(acercaDeMi.CandidatoId);
            _context.PerfilCandidato.Add(perfilCandidato);
            aboutMe.PerfilCandidatoId = perfilCandidato.Id;
            _context.AcercaDeMi.Add(aboutMe);
            _context.SaveChanges();

            var formulariosIniciales = _context.FormulariosIniciales.SingleOrDefault(f => f.CandidatoId == acercaDeMi.CandidatoId);
            formulariosIniciales.Paso = 3;
            _context.FormulariosIniciales.Attach(formulariosIniciales);
            _context.Entry(formulariosIniciales).State = EntityState.Modified;
            _context.SaveChanges();

            return Ok(perfilCandidato.Id);
        }

        [HttpPut]
        public IHttpActionResult UpdateAboutMe(AboutMeDto acercaDeMi)
        {
            var aboutMe = Mapper.Map<AboutMeDto, AboutMe>(acercaDeMi);
            _context.Entry(aboutMe).State = EntityState.Modified;            
            _context.SaveChanges();
            return Ok(acercaDeMi);
        }

       


    }
}
