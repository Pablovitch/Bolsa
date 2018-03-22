using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class MunicipioDto
    {
        public int Id { get; set; } 
        public string municipio { get; set; }
        public int EstadoId { get; set; } 
    }
}