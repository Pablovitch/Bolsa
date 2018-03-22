using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public class Telefono
    {
        public Guid Id { get; set; }
        [MaxLength(5)]
        public string ClavePais { get; set; }

        public String ClaveLada { get; set; }
        public String Extension { get; set; }

        [Required]
        public string telefono { get; set; }
        public byte TipoTelefonoId { get; set; }
        public virtual TipoTelefono TipoTelefono { get; set; }
      
        [DefaultValue(true)]
        public bool Activo { get; set; }
        public bool esPrincipal { get; set; }

        public Guid PersonaId { get; set; }
        public virtual Persona Persona { get; set; }

        public Telefono(string clavePais, string telefono, byte tipoTelefono, Guid idPersona)
        {
            ClavePais = clavePais;
            this.telefono = telefono;
            TipoTelefonoId = tipoTelefono;
            PersonaId = idPersona;
            this.Id = Guid.NewGuid();
        }

        public Telefono()
        {
            this.Id = Guid.NewGuid();
        }
    }
}