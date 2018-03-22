using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Models
{
    public class Carrera
    {
        public Guid Id { get; set; }
        public string carrera { get; set; }

        public Carrera()
        {
            this.Id = Guid.NewGuid();
        }
    }
}