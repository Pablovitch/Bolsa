using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity.Validation;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class DireccionController : ApiController
    {
        private Dictionary<string, int> TiposDirecciones = new Dictionary<string, int>()
        {
            { "Personal", 1 }
        };
        private ApplicationDbContext _context;
        public DireccionController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetDireccion(Guid CandidatoId)
        {
            //Mapper.Map<Direccion, DireccionDto>(
            var direccion =
                _context.Direcciones
                .Include(p=>p.Pais)
                .Include(e=>e.Estado)
                .Include(m=>m.Municipio)
                .Include(c=>c.Colonia)
                .SingleOrDefault(d => d.PersonaId == CandidatoId);
            
            return Ok(direccion);
           
        }

        [HttpPut]
        public IHttpActionResult UpdateDirecion(DireccionDto Direccion)
        {
            var direccion = Mapper.Map<DireccionDto, Direccion>(Direccion); 
            direccion.TipoDireccionId = TiposDirecciones["Personal"];
            _context.Direcciones.Attach(direccion);
            _context.Entry(direccion).State = EntityState.Modified;
            _context.SaveChanges();          

            return Ok(Direccion);
        }

        [HttpPost]
        public IHttpActionResult AddDirecion(DireccionDto Direccion)
        {

            var direccion = Mapper.Map<DireccionDto, Direccion>(Direccion);
            direccion.Id = Guid.NewGuid();
            direccion.TipoDireccionId = TiposDirecciones["Personal"];
            _context.Direcciones.Add(direccion);
            _context.SaveChanges();

            var formulariosIniciales = _context.FormulariosIniciales.SingleOrDefault(f => f.CandidatoId == direccion.PersonaId);
            formulariosIniciales.Paso = 2;
            _context.FormulariosIniciales.Attach(formulariosIniciales);
            _context.Entry(formulariosIniciales).State = EntityState.Modified;
            _context.SaveChanges();

            return Created(new Uri(Request.RequestUri + "/" + direccion.PersonaId), direccion.PersonaId);

        }
    }
}
