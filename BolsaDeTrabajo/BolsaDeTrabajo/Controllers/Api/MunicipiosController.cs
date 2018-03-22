using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models; 
using System.Linq; 
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class MunicipiosController : ApiController
    {
        private ApplicationDbContext _context;
        public MunicipiosController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult getMunicipios()
        {
            var municipios =_context.Municipios.ToList()
                                .Select(Mapper.Map<Municipio, MunicipioDto>);

            return Ok(municipios);
        }

        public IHttpActionResult getMunicipios(int id, string query)
        {
            var municipios = _context.Municipios.ToList()
                .Where(m => m.EstadoId==id )
                .Where(m =>
                    m.municipio.ToLower().StartsWith(query.ToLower()) || m.municipio.ToLower().Contains(query.ToLower())
                )
                .Select(Mapper.Map<Municipio, MunicipioDto>);

            return Ok(municipios);
        }
    }
}
