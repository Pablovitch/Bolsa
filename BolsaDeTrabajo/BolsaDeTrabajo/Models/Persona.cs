using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Models
{
    public abstract class Persona
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public virtual ICollection<Direccion> direcciones { get; set; }
        public virtual ICollection<Telefono> telefonos { get; set; }
        public virtual ICollection<Email> emails { get; set; }
        public Persona()
        {
            this.Id = Guid.NewGuid();
        }
        

    }
}