using System;
using System.Collections.Generic;

namespace BolsaDeTrabajo.Models
{
    public class Referenciado : Persona
    {
        public string Puesto { get; set; }
        public string Clave { get; set; }
        public Guid ClienteId { get; set; }
        public virtual Cliente Cliente { get; set; }
    }
}