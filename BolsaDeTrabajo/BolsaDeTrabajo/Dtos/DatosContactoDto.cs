using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class DatosContactoDto
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string email { get; set; }
        public string confirmEmail { get; set; }        
        public DateTime FechaNacimiento { get; set; }
        public int PaisNacimientoId { get; set; }
        public int? EstadoNacimientoId { get; set; } 
        public PaisDto paisNacimiento { get; set; }
        public EstadoDto estadoNacimiento { get; set; }
        public byte GeneroId { get; set; }
        public string Telefono { get; set; }
        public string CURP { get; set; }

        public byte TipoTelefonoId { get; set; }
        public TipoTelefono TipoTelefono { get; set; }
    }
}