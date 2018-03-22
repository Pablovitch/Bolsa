using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos.DatosGenerales
{
    public class InformacionGeneralDto
    {
        public Guid CandidatoId { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string email { get; set; }
        public string ImgProfileUrl { get; set; }
        public string curp { get; set; }

        public InformacionGeneralDto()
        {
            ImgProfileUrl = string.Empty;
        }
    }
}