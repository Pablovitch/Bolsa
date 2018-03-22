using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public partial class DiaSemana
    {
        public DiaSemana()
        {

        }
        [Key]
        public byte Id { get; set; }
        public string diaSemana { get; set; }
    }
}
