using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class ResumenVacanteDto
    {
        public Guid vacanteId { get; set; }
        public Guid postulacionId { get; set; }
        public string descripcionVacante { get; set; }
        public string statusPostulacion { get; set; }
        public int statusPostulacionId { get; set; }
        public string estadoVacante { get; set; }
        public string municipioVacante { get; set; }
        public DateTime fechaPublicacion { get; set; }
        public string categoriaVacante { get; set; }
        public int categoriaVacanteId { get; set; }

    }
}