using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public class Estatus
    {
        [Key]
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public int ModuloId { get; set; }
        public bool Activo { get; set; }

        public virtual Modulos Modulo { get; set; }
    }
}
