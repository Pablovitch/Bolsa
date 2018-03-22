using AutoMapper;
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
    public class DetalleVacanteController : ApiController
    {
        private ApplicationDbContext _context;
        public DetalleVacanteController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetDetalleVacante (Guid vacanteId)
        {
            VacanteDto vacante = _context.Requisiciones
                .Include("Direccion.Pais")
                .Include("Direccion.Estado")
                .Include("Direccion.Municipio")
                .Include("Direccion.Colonia")
                .Include("Area")
                .Include("Cliente")
                .Include("Horario")
                .Include("Horario.deDia")
                .Include("Horario.aDia")
                .Include("ContratoInicial")
                .Include("ContratoFinal")
                .Where(v => v.Id == vacanteId)
                .Select(Mapper.Map<Requisicion, VacanteDto>)
                .FirstOrDefault();
            vacante.actividadesRequi = _context.ActividadesRequis
                                //.Include("Actividades")
                                .Where(a => a.RequisicionId == vacante.Id)
                                .ToList();
            vacante.aptitudesRequi = _context.AptitudesRequis
                              .Include("Aptitud")
                              .Where(a => a.RequisicionId == vacante.Id)
                              .ToList();
            vacante.beneficiosRequi=_context.BeneficiosRequis
                                .Include("TipoBeneficio")
                                .Where(b => b.RequisicionId == vacante.Id)
                                .ToList();
            vacante.prestacionesClienteRequi=_context.PrestacionesClienteRequis
                                .Where(p => p.RequisicionId == vacante.Id)
                                .ToList();
            vacante.PrestacionesLey = _context.PrestacionesLey.ToList();
            vacante.escolaridadesRequi = _context.EscolaridadesRequis
                                    .Include("EstadoEstudio")
                                    .Include("Escolaridad")
                                    .Where(e => e.RequisicionId == vacante.Id)
                                    .ToList();
            

            return Ok(vacante);
        }
    }
}
