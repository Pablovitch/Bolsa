using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public class TipoContrato
    {
        [Key]
        public int Id { get; set; }
        public string tipoContrato { get; set; }
    }
}
