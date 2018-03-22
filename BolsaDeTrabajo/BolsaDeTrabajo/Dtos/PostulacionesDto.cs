using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class PostulacionesDto
    {
        public ICollection<ResumenVacanteDto> Postulaciones { get; set; }
        public ICollection<StatusPostulacion> StatusPostulaciones { get; set; }
        public ICollection<Area> Categorias { get; set; }
    }
}