using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public class Modulos
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Accion { get; set; }
        public string Icono { get; set; }
        public int Orden { get; set; }
        public int? IdPadre { get; set; }
        public bool Activo { get; set; }
        public string Ambito { get; set; }
        public string Clave { get; set; }
    }
}
