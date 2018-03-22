using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class IdentificacionesDto
    {
        public bool tieneLicenciaConducir { get; set; }
        public byte? TipoLicenciaId { get; set; }
        public string tipoLicencia { get; set; } 
        public bool tieneVehiculoPropio { get; set; } 
        public string CURP { get; set; }
        public string RFC { get; set; } 
        public string NSS { get; set; }

        public IdentificacionesDto()
        {

        }
    }
}