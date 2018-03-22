using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class FiltroPostulaciones
    {
        public Guid CandidatoId { get; set; }
        public string palabraClave { get; set; }
        public int[] filtroStatus { get; set; }
        public int[] filtroCategoria { get; set; }
    }
}