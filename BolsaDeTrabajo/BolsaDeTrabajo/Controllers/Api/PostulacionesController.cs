using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using BolsaDeTrabajo.Dtos;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class PostulacionesController : ApiController
    {
        private ApplicationDbContext _context;
        public PostulacionesController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetPostulaciones(Guid candidatoId)
        {
            PostulacionesDto Postulaciones = new PostulacionesDto();
            Postulaciones.Postulaciones = (from postulaciones in _context.Postulaciones
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
                                      vacanteId=vacantes.Id,
                                      postulacionId=postulaciones.Id,
                                      descripcionVacante =vacantes.VBtra,
                                      statusPostulacion=status.Status,
                                      statusPostulacionId=status.Id,
                                      estadoVacante=estado.estado,
                                      municipioVacante=municipio.municipio,
                                      fechaPublicacion=vacantes.FechaCreacion,
                                      categoriaVacante=categoria.Nombre,
                                      categoriaVacanteId=categoria.Id
                                  }).ToList();
            //Postulaciones.StatusPostulaciones
               var grupostatus = Postulaciones.Postulaciones
                            .GroupBy(o => new  { Id = o.statusPostulacionId, Status = o.statusPostulacion })
                            .Select(o => o.FirstOrDefault())
                            .ToList();
            Postulaciones.StatusPostulaciones = grupostatus
                .Select(x => new StatusPostulacion { Id = x.statusPostulacionId, Status = x.statusPostulacion })
                .ToList();
            var groupcategorias= Postulaciones.Postulaciones
                            .GroupBy(o => new { Id = o.categoriaVacanteId, Nombre = o.categoriaVacante })
                            .Select(o => o.FirstOrDefault())
                            .ToList();
            Postulaciones.Categorias = groupcategorias
                          .Select(o => new Area { Id = o.categoriaVacanteId, Nombre= o.categoriaVacante })
                          .ToList();

            return Ok(Postulaciones);
        }

        [HttpDelete]
        public IHttpActionResult DeclinarPostulacion(Guid postulacionId)
        {
            _context.Postulaciones.Remove(_context.Postulaciones.SingleOrDefault(p => p.Id == postulacionId));
            _context.SaveChanges();
            return Ok();
        }
    }
}
