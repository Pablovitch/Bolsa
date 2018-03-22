using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Models
{
    public class ConocimientoInformatico
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }

        public ConocimientoInformatico()
        {
            this.Id = Guid.NewGuid();
        }
    }
}