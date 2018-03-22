using System;

namespace BolsaDeTrabajo.Dtos
{
    public class DatosPersonales
    {
        public string telCasa { get; set; }
        public string telCelular { get; set; } 
        public string telOficina { get; set; }

        public bool esDiscapacitado { get; set; }
        public bool puedeRehubicarse { get; set; }
        public bool puedeViajar { get; set; }

        public bool CorreoElectronico { get; set; }
        public bool Celular { get; set; }
        public bool WhatsApp { get; set; }
        public bool TelLocal { get; set; }

        public byte? EstadoCivilId { get; set; }
        public byte GeneroId { get; set; }
        public int? TipoDiscapacidadId { get; set; }

        public DateTime FechaNacimiento { get; set; }

        public int PaisNacimientoId { get; set; } 
        public int? EstadoNacimientoId { get; set; } 
        public int? MunicipioNacimientoId { get; set; } 

        public PaisDto paisNacimiento { get; set; }
        public EstadoDto estadoNacimiento { get; set; }
        public MunicipioDto municipioNacimiento { get; set; }

        public string CodigoPostal { get; set; }

        public DatosPersonales()
        {
            
        }

       

    }
}