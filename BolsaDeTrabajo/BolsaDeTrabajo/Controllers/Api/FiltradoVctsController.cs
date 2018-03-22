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
    public class FiltradoVctsController : ApiController
    {
        private ApplicationDbContext _db;


        public FiltradoVctsController()
        {
            _db = new ApplicationDbContext();
        }

        [HttpPost]
        public IHttpActionResult CreateFiltradoVacantes(FiltroVacantes filtro)
        {


            List<VctosDto> VacantesFiltradas = new List<VctosDto>();
            VacantesFiltradas = VacantesBusqueda();

            if (!string.IsNullOrEmpty(filtro.palabraClave))
            {
                VacantesFiltradas = PalabraClave(filtro.palabraClave, VacantesFiltradas);
            }
            if (filtro.filtroCategoria.Length > 0)
            {
                VacantesFiltradas = Categorias(filtro.filtroCategoria, VacantesFiltradas);
            }

            if (filtro.filtroEstados.Length > 0)
            {
                VacantesFiltradas = Estados(filtro.filtroEstados, VacantesFiltradas);
            }

            if (filtro.filtrosmunicipio.Length > 0)
            {
                VacantesFiltradas = Municipios(filtro.filtrosmunicipio, VacantesFiltradas);
            }

            if (filtro.filtroEscolaridades.Length > 0)
            {
                VacantesFiltradas = BusquedaEscolaridad();
                VacantesFiltradas = Escolaridad(filtro.filtroEscolaridades, VacantesFiltradas);
            }

            if (filtro.SMin > 0 || filtro.SMax > 0)
            {
                VacantesFiltradas = Sueldos(filtro.SMin, filtro.SMax, VacantesFiltradas);
            }

            return Created(new Uri(Request.RequestUri + "/" + filtro.CandidatoId), VacantesFiltradas);
        }

        private List<VctosDto> VacantesBusqueda()
        {

            var FiltradoVacantes = (from requisiciones in _db.Requisiciones
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
                                        categoria = categoria.Nombre,
                                        Experiencia = requisiciones.Experiencia,
                                        SueldoMaximo = requisiciones.SueldoMaximo,
                                        SueldoMinimo = requisiciones.SueldoMinimo,
                                        FechaAprobacion = requisiciones.FechaAprobacion,
                                        PrioridadId = prioridad.Id,
                                        Aprobada = requisiciones.Aprobada,
                                        EstatusId = estatus.Id,
                                        HorarioId = horario.Id,
                                        Horario1 = horario.deHora,
                                        Horario2 = horario.aHora,
                                        estadoid = estado.Id,
                                        estado = estado.estado,
                                        municipioid = municipio.Id,
                                        municipio = municipio.municipio
                                    }).ToList();


            return FiltradoVacantes;
        }


        private List<VctosDto> PalabraClave(string palabraClave, List<VctosDto> vacantes)
        {
            var FiltradoVacantes = (from vacante in vacantes
                                    where vacante.VBtra.ToLower().StartsWith(palabraClave.Trim().ToLower())
                                         || vacante.VBtra.ToLower().Contains(palabraClave.Trim().ToLower())
                                    select vacante
                                        ).ToList();
            return FiltradoVacantes;
        }

        private List<VctosDto> Categorias(int[] categorias, List<VctosDto> vacantes)
        {
            var FiltradoVacantes = (from vacante in vacantes
                                    where categorias.Contains(vacante.categoriaId)
                                    select vacante
                                        ).ToList();
            return FiltradoVacantes;
        }

        private List<VctosDto> Estados(int[] estados, List<VctosDto> vacantes)
        {
            var FiltradoVacantes = (from vacante in vacantes
                                    where estados.Contains(vacante.estadoid)
                                    select vacante
                                        ).ToList();
            return FiltradoVacantes;
        }

        private List<VctosDto> Municipios(int[] municipios, List<VctosDto> vacantes)
        {
            var FiltradoVacantes = (from vacante in vacantes
                                    where municipios.Contains(vacante.municipioid)
                                    select vacante
                                        ).ToList();
            return FiltradoVacantes;
        }

        private List<VctosDto> Escolaridad(int[] escolaridad, List<VctosDto> vacantes)
        {
            var FiltradoVacantes = (from vacante in vacantes
                                    where escolaridad.Contains(vacante.escolaridadid)
                                    select vacante)
                                    .ToList();

            return FiltradoVacantes;
        }

        private List<VctosDto> Sueldos(int SueldoMinimo, int SueldoMaximo, List<VctosDto> vacantes)
        {
            var FiltradoVacantes = (from vacante in vacantes
                                    where vacante.SueldoMinimo >= SueldoMinimo
                                    where vacante.SueldoMinimo <= SueldoMaximo
                                    select vacante)
                                    .ToList();

            return FiltradoVacantes;
        }

        private List<VctosDto> BusquedaEscolaridad()
        {
            var filtroesc = (from requisiciones in _db.Requisiciones
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
                                 categoriaId = categoria.Id,
                                 categoria = categoria.Nombre,
                                 Experiencia = requisiciones.Experiencia,
                                 SueldoMaximo = requisiciones.SueldoMaximo,
                                 SueldoMinimo = requisiciones.SueldoMinimo,
                                 FechaAprobacion = requisiciones.FechaAprobacion,
                                 PrioridadId = prioridad.Id,
                                 Aprobada = requisiciones.Aprobada,
                                 EstatusId = estatus.Id,
                                 HorarioId = horario.Id,
                                 Horario1 = horario.deHora,
                                 Horario2 = horario.aHora,
                                 estadoid = estado.Id,
                                 estado = estado.estado,
                                 municipioid = municipio.Id,
                                 municipio = municipio.municipio,
                                 escolaridadid = gradoestudio.Id,
                                 escolaridad = gradoestudio.gradoEstudio,
                                 estadoestudioid = estadoestudio.Id,
                                 estadoestudio = estadoestudio.estadoEstudio
                             }).ToList();

            return filtroesc;
        }
    }
}
