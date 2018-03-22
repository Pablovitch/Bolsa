using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class ColoniaDto
    {
        public int Id { get; set; }
        public string colonia { get; set; }
        public string CP { get; set; }
        public string TipoColonia { get; set; }
        public int MunicipioId { get; set; } 
        public int EstadoId { get; set; } 
        public int PaisId { get; set; }  
    }
}