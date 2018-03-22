using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Models
{
    public class Estado
    {
        public int Id { get; set; }
        [MaxLength(50)]
        public string estado { get; set; }
        public int PaisId { get; set; }
        public Pais Pais { get; set; }
        public string Clave { get; set; }
        
    }
}