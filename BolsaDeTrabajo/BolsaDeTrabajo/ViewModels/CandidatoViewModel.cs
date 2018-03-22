using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.ViewModels
{
    public class CandidatoViewModel
    { 
        public int Id { get; set; }    
        public string Nombre { get; set; }   
        public string ApellidoPaterno { get; set; } 
        public string ApellidoMaterno { get; set; } 
        public DateTime? FechaNacimiento { get; set; } 

        public int PaisId { get; set; }
        public Pais Pais { get; set; }
         
        public int EstadoId { get; set; }
        public Estado Estado { get; set; }
         
        public int MunicipioId { get; set; }
        public Municipio Municipio { get; set; }
         
        public byte GeneroId { get; set; }
        public Genero Genero { get; set; }
         
        public byte EstadoCivilId { get; set; }
        public EstadoCivil EstadoCivil { get; set; }

        public bool esDiscapacitado { get; set; }
        public int TipoDiscapacidadId { get; set; }
        public TipoDiscapacidad TipoDiscapacidad { get; set; }

        public bool tieneLicenciaConducir { get; set; }
        public int TipoLicenciaId { get; set; }
        public TipoLicencia TipoLicencia { get; set; }
        public bool tieneVehiculoPropio { get; set; }

        public bool puedeViajar { get; set; }
        public bool puedeReubicarse { get; set; }

        public string CURP { get; set; }
        public string RFC { get; set; } 
        public string NSS { get; set; }

        public Direccion direccion { get; set; }
        public Telefono telefono { get; set; }
        public Email email { get; set; }

      
    }
}