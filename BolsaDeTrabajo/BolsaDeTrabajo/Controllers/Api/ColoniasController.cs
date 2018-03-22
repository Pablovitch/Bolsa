using AutoMapper;
using BolsaDeTrabajo.Models;
using System.Linq;
using System.Web.Http;
using BolsaDeTrabajo.Dtos;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class ColoniasController : ApiController
    {
        private ApplicationDbContext _Context;
        public ColoniasController()
        {
            _Context = new ApplicationDbContext();
        }
        public IHttpActionResult getColonias()
        {
            var colonias = _Context.Colonias.ToList()
                .First();
            return Ok(colonias);

        }
        public IHttpActionResult getColonias(string cp)
        {
            //var colonias = _Context.Colonias
            //    .Where(c => c.CP == cp)
            //    .FirstOrDefault();
            var colonias = _Context.Colonias.ToList()
                .Where(c => c.CP == cp)
                .Select(Mapper.Map<Colonia, ColoniaDto>);


             return Ok(colonias);

        }
        public IHttpActionResult getColonias(string cp, string query)
        {
            if (string.IsNullOrEmpty(cp) && string.IsNullOrEmpty(query))
                return null;

            if (!string.IsNullOrEmpty(cp) && !string.IsNullOrEmpty(query))
            {
                var colonias = _Context.Colonias.ToList()
                    .Where(c => c.CP == cp)
                    .Where(c =>
                    c.colonia.ToLower().StartsWith(query.ToLower()) || c.colonia.ToLower().Contains(query.ToLower()))
                    .Select(Mapper.Map<Colonia, ColoniaDto>);

                return Ok(colonias);
            }
            if (string.IsNullOrEmpty(cp))
            {
                var colonias = _Context.Colonias.ToList()
                    .Where(c =>
                    c.colonia.ToLower().StartsWith(query.ToLower()) || c.colonia.ToLower().Contains(query.ToLower()))
                    .Select(Mapper.Map<Colonia, Dtos.ColoniaDto>);

                return Ok(colonias);
            }
            else if (string.IsNullOrEmpty(query))
            {
                var colonias = _Context.Colonias.ToList()
                    .Where(c => c.CP == cp)
                    .Select(Mapper.Map<Colonia, Dtos.ColoniaDto>);
                return Ok(colonias);
            }

            return null;

        }

    }
}
