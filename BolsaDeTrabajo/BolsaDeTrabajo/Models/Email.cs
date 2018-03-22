using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Models
{
    public class Email
    {
        public Guid Id { get; set; }
        [Display(Name = "Email")]
        [Required]        
        public string email { get; set; }
        public bool esPrincipal { get; set; }
        public Guid PersonaId { get; set; }
        public virtual Persona Persona{ get; set; }

        public Email(string correo, Guid idPersona)
        {
            email = correo;
            PersonaId = idPersona;
            this.Id = Guid.NewGuid();

        }

        public Email()
        {
            this.Id = Guid.NewGuid();
        }
    }
}