using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class CandidatoDto
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }

        public string email { get; set; }
        public string ImgProfileUrl { get; set; }

        public DatosPersonales datospersonales { get; set; }

        public DireccionDto Direccion { get; set; }

        public IdentificacionesDto identificaciones { get; set; }

        public CandidatoDto()
        {
            datospersonales = new DatosPersonales();
            Direccion = new DireccionDto();
            identificaciones = new IdentificacionesDto();

        }

    }
}