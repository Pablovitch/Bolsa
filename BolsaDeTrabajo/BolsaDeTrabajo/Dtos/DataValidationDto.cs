using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class DataValidationDto
    {
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public byte GeneroId { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public EstadoDto estadoNacimiento { get; set; }
        public PaisDto paisNacimiento { get; set; }

    }
}