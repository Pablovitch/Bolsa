using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class TiposLicenciasController : ApiController
    {
        private ApplicationDbContext _Context;
        public TiposLicenciasController()
        {
            _Context = new ApplicationDbContext();
        }

        public IHttpActionResult getTiposLicencias()
            {
            var tiposLicencias = _Context.TiposLicencias.ToList()
                .Select(tipo => new TipoLicenciaDto{
                    Id = tipo.Id,
                    tipoLicencia = tipo.tipoLicencia + " : " + tipo.Descripcion }
                );
            return Ok(tiposLicencias);
        }
    }
}
