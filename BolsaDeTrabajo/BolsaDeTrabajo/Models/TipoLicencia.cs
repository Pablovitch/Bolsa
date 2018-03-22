using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Models
{
    public class TipoLicencia
    {
        public byte Id { get; set; }
        public string tipoLicencia { get; set; }
        public string Descripcion { get; set; }
    }
}