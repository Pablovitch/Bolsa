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
    public class FiltroPostulacionesController : ApiController
    {
        private ApplicationDbContext _context;
        public FiltroPostulacionesController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpPost]
        public IHttpActionResult CreateFiltradoPostulaciones(FiltroPostulaciones filtro)
        {

            List<ResumenVacanteDto> PostulacionesFiltradas = new List<ResumenVacanteDto>();
            PostulacionesFiltradas = postulacionesCandidato(filtro.CandidatoId);
            if (!string.IsNullOrEmpty(filtro.palabraClave))
            {
                PostulacionesFiltradas = postulacionesPalabraClave(filtro.palabraClave, PostulacionesFiltradas);
            }
            if (filtro.filtroStatus.Length > 0) {
                PostulacionesFiltradas = postulacionesStatus(filtro.filtroStatus, PostulacionesFiltradas);
            }
            if (filtro.filtroCategoria.Length>0)
            {
                PostulacionesFiltradas = postulacionesCategorias(filtro.filtroCategoria, PostulacionesFiltradas);
            }

            return Created(new Uri(Request.RequestUri + "/" + filtro.CandidatoId), PostulacionesFiltradas);
        }

        private List<ResumenVacanteDto> postulacionesCandidato(Guid candidatoId)
        {
            var FiltradoPostulaciones = (from postulaciones in _context.Postulaciones
                                         join vacantes in _context.Requisiciones
                                         on postulaciones.RequisicionId equals vacantes.Id
                                         join direccion in _context.Direcciones
                                         on vacantes.DireccionId equals direccion.Id
                                         join estado in _context.Estados
                                         on direccion.EstadoId equals estado.Id
                                         join municipio in _context.Municipios
                                         on direccion.MunicipioId equals municipio.Id
                                         join categoria in _context.Areas
                                         on vacantes.AreaId equals categoria.Id
                                         join status in _context.StatusPostulaciones
                                         on postulaciones.StatusId equals status.Id
                                         where postulaciones.CandidatoId == candidatoId
                                         select new ResumenVacanteDto
                                         {
                                             vacanteId = vacantes.Id,
                                             postulacionId = postulaciones.Id,
                                             descripcionVacante = vacantes.VBtra,
                                             statusPostulacion = status.Status,
                                             statusPostulacionId = status.Id,
                                             estadoVacante = estado.estado,
                                             municipioVacante = municipio.municipio,
                                             fechaPublicacion = vacantes.FechaCreacion,
                                             categoriaVacante = categoria.Nombre,
                                             categoriaVacanteId = categoria.Id
                                         })

                              .ToList();
            return FiltradoPostulaciones;
        }
        private List<ResumenVacanteDto> postulacionesPalabraClave(string palabraClave, List<ResumenVacanteDto> postulaciones)
        {
            var FiltradoPostulaciones = (from postulacion in postulaciones
                                         where postulacion.descripcionVacante.ToLower().StartsWith(palabraClave.Trim().ToLower())
                                         || postulacion.descripcionVacante.ToLower().Contains(palabraClave.Trim().ToLower())
                                         select postulacion
                                        ).ToList();
            return FiltradoPostulaciones;
        }

        private List<ResumenVacanteDto> postulacionesStatus(int[] status, List<ResumenVacanteDto> postulaciones)
        {
            var FiltradoPostulaciones = (from postulacion in postulaciones
                                         where status.Contains(postulacion.statusPostulacionId)
                                         select postulacion
                                        ).ToList();
            return FiltradoPostulaciones;
        }

        private List<ResumenVacanteDto> postulacionesCategorias(int[] categorias, List<ResumenVacanteDto> postulaciones)
        {
            var FiltradoPostulaciones = (from postulacion in postulaciones
                                         where categorias.Contains(postulacion.categoriaVacanteId)
                                         select postulacion
                                        ).ToList();
            return FiltradoPostulaciones;
        }
    }
}
