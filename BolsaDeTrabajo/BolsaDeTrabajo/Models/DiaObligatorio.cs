using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public class DiaObligatorio
    {
        [Key]
        public int id { get; set; }
        public string diaObligatorio { get; set; }
    }
}
