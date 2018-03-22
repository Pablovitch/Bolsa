using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Models
{
    public class Municipio
    {
        public int Id { get; set; }
        [MaxLength]
        [Display(Name ="Municipio/Localidad")]
        public string municipio { get; set; }
        public int EstadoId { get; set; }
        public Estado Estado { get; set; }

       
    }
}