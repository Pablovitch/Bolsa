using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Models
{
    public class InstitucionEducativa
    {
        public Guid Id { get; set; }
        public string institucionEducativa { get; set; }

        public InstitucionEducativa()
        {
            this.Id = Guid.NewGuid();
        }
    }
}