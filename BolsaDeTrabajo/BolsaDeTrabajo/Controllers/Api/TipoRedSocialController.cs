using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class TipoRedSocialController : ApiController
    {
        private ApplicationDbContext _context;
        public TipoRedSocialController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetTiposRedesSociales()
        {
            var tiposRedesSociales = _context.TiposRedesSociales
                .Select(rs => new
                {
                    label = rs.tipoRedSocial,
                    value = rs.Id,
                })
                .ToList();

            return Ok(tiposRedesSociales);
        }
    }
}
