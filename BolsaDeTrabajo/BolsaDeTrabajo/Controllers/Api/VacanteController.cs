using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using BolsaDeTrabajo.Models;
using BolsaDeTrabajo.Dtos;
using System.Collections.Generic;

namespace BolsaDeTrabajo.Controllers.Api
{
    //[RoutePrefix("api/Vacantes")]
    public class VacanteController : ApiController
    {
        private ApplicationDbContext _db;


        public VacanteController()
        {
            _db = new ApplicationDbContext() ;
        }

        //[ResponseType(typeof(Requisicion))]
        [HttpGet]
        //[Route("GetById")] // Busqueda del detalle de la vacante.
        public IHttpActionResult Get(Guid id)
        {
            VacantesDto vacante = _db.Requisiciones
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
                .Where(r => r.Id == id)
                .Select(Mapper.Map<Requisicion, VacantesDto>)
                .FirstOrDefault();
            vacante.actividadesRequi = _db.ActividadesRequis
                                //.Include("Actividades")
                                .Where(a => a.RequisicionId == vacante.Id)
                                .ToList();
            vacante.aptitudesRequi = _db.AptitudesRequis
                              .Include("Aptitud")
                              .Where(a => a.RequisicionId == vacante.Id)
                              .ToList();
            vacante.beneficiosRequi = _db.BeneficiosRequis
                                .Include("TipoBeneficio")
                                .Where(b => b.RequisicionId == vacante.Id)
                                .ToList();
            vacante.prestacionesClienteRequi = _db.PrestacionesClienteRequis
                                .Where(p => p.RequisicionId == vacante.Id)
                                .ToList();
            vacante.PrestacionesLey = _db.PrestacionesLey.ToList();
            vacante.escolaridadesRequi = _db.EscolaridadesRequis
                                    .Include("EstadoEstudio")
                                    .Include("Escolaridad")
                                    .Where(e => e.RequisicionId == vacante.Id)
                                    .ToList();

            if (vacante == null)
            {
                return NotFound();
            }

            return Ok(vacante);
        }

        //[ResponseType(typeof(Requisicion))]
        [HttpGet]
        /* [Route("Get")]*/ // Busqueda de todas las vacantes.
        public IHttpActionResult Get()
        {
            VctsGralDto vacantes = new VctsGralDto();

            vacantes.Vacantes = (from requisiciones in _db.Requisiciones
                                 join direccion in _db.Direcciones
                                 on requisiciones.DireccionId equals direccion.Id
                                 join estado in _db.Estados
                                 on direccion.EstadoId equals estado.Id
                                 join municipio in _db.Municipios
                                 on direccion.MunicipioId equals municipio.Id
                                 join categoria in _db.Areas
                                 on requisiciones.AreaId equals categoria.Id
                                 join estatus in _db.Estatus
                                 on requisiciones.EstatusId equals estatus.Id
                                 join horario in _db.HorariosRequis
                                 on requisiciones.HorarioId equals horario.Id
                                 join prioridad in _db.Prioridades
                                 on requisiciones.PrioridadId equals prioridad.Id

                                 select new VctosDto
                                 {
                                     Id = requisiciones.Id,
                                     VBtra = requisiciones.VBtra,
                                     categoriaId = categoria.Id,
                                     categoria=categoria.Nombre,
                                     Experiencia = requisiciones.Experiencia,
                                     SueldoMaximo = requisiciones.SueldoMaximo,
                                     SueldoMinimo = requisiciones.SueldoMinimo,
                                     FechaAprobacion = requisiciones.FechaAprobacion,
                                     PrioridadId = prioridad.Id,
                                     Aprobada = requisiciones.Aprobada,
                                     EstatusId = estatus.Id,
                                     HorarioId = horario.Id,
                                     Horario1=horario.deHora,
                                     Horario2=horario.aHora,
                                     estadoid=estado.Id,
                                     estado=estado.estado,
                                     municipioid=municipio.Id,
                                     municipio=municipio.municipio
                                 }).ToList();

            VctsGralDto vctesco = new VctsGralDto();

            vctesco.Vacantes = (from requisiciones in _db.Requisiciones
                                 join escolaridad in _db.EscolaridadesRequis
                                 on requisiciones.Id equals escolaridad.RequisicionId
                                 join estadoestudio in _db.EstadosEstudios
                                 on escolaridad.EstadoEstudioId equals estadoestudio.Id
                                 join gradoestudio in _db.GradosEstudios
                                 on escolaridad.EscolaridadId equals gradoestudio.Id

                                 select new VctosDto
                                 {
                                     Id = requisiciones.Id,
                                     VBtra = requisiciones.VBtra,
                                     escolaridadid = gradoestudio.Id,
                                     escolaridad = gradoestudio.gradoEstudio,
                                     estadoestudioid = estadoestudio.Id,
                                     estadoestudio = estadoestudio.estadoEstudio
                                 }).ToList();

            var groupcategorias = vacantes.Vacantes
                           .GroupBy(o => new { Id = o.categoriaId, Nombre = o.categoria })
                           .Select(o => o.FirstOrDefault())
                           .ToList();
            vacantes.Categorias = groupcategorias
                          .Select(o => new Area { Id = o.categoriaId, Nombre = o.categoria })
                          .ToList();

            var groupestados = vacantes.Vacantes
                           .GroupBy(o => new { Id = o.estadoid, estado = o.estado })
                           .Select(o => o.FirstOrDefault())
                           .ToList();
            vacantes.Estados = groupestados
                          .Select(o => new Estado { Id = o.estadoid, estado = o.estado })
                          .ToList();

            var groupmunicipios = vacantes.Vacantes
                           .GroupBy(o => new { Id = o.municipioid, municipio = o.municipio })
                           .Select(o => o.FirstOrDefault())
                           .ToList();
            vacantes.Municipios = groupmunicipios
                          .Select(o => new Municipio { Id = o.municipioid, municipio = o.municipio })
                          .ToList();

            var escolaridades = vctesco.Vacantes
                          .GroupBy(o => new { Id = o.escolaridadid, escolaridad = o.escolaridad })
                          .Select(o => o.FirstOrDefault())
                          .ToList();
            vacantes.Escolaridades = escolaridades
                          .Select(o => new GradoEstudio { Id = o.escolaridadid, gradoEstudio = o.escolaridad })
                          .ToList();

            var estadoestudios = vctesco.Vacantes
                          .GroupBy(o => new { Id = o.estadoestudioid, estadoEstudio = o.estadoestudio })
                          .Select(o => o.FirstOrDefault())
                          .ToList();
            vacantes.EstadoEstudios = estadoestudios
                          .Select(o => new EstadoEstudio { Id = o.estadoestudioid, estadoEstudio = o.estadoestudio })
                          .ToList();


            //var vacantes = _db.Requisiciones
            //    .Include("Area")
            //    .Include("Direccion.Estado")
            //    .Include("Direccion.Municipio")
            //    .Include("escolaridadesRequi.EstadoEstudio")
            //    .Include("escolaridadesRequi.Escolaridad")
            //.Select(Mapper.Map<Requisicion, VacantesDto>);

            return Ok(vacantes);
        }

        //[ResponseType(typeof(Requisicion))]
        [HttpGet]
        //[Route("GetFind")] // Busqueda de las vacantes con filtro.
        public IHttpActionResult Get(string filter)
        {
            var filtros = _db.Requisiciones.ToList()
                .Select(Mapper.Map<Requisicion, VacantesDto>)
                .Where(v => v.VBtra.Contains(filter));

            if (filtros == null)
            {
                return NotFound();
            }

            return Ok(filtros);
        }

        [HttpPost]
        public IHttpActionResult postular(Postulacion pos)
        {
            using (var dbContextTransaction = _db.Database.BeginTransaction())
            {
                try
                {
                    _db.Postulaciones.Add(pos);
                    _db.SaveChanges();
                    dbContextTransaction.Commit();
                }
                catch (Exception)
                {
                    dbContextTransaction.Rollback();
                }
            }
            return Ok(pos);
        }
    }
}
