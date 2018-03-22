using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public partial class TipoDireccion
    {
        public TipoDireccion()
        {

        }
        [Key]
        public int Id { get; set; }
        public string tipoDireccion { get; set; }

    }
}