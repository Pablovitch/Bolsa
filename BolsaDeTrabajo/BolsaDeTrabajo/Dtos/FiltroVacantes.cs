using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class FiltroVacantes
    {
        public Guid CandidatoId { get; set; }
        public string palabraClave { get; set; }
        public int [] filtroEstados { get; set; }
        public int [] filtrosmunicipio { get; set; }
        public int [] filtroCategoria { get; set; }
        public int [] filtroEscolaridades { get; set; }
        public int SMax { get; set; }
        public int SMin { get; set; }
    }
}