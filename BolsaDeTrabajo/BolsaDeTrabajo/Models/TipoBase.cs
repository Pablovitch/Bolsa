using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public class TipoBase
    {
        public TipoBase()
        {

        }
        [Key]
        public int Id { get; set; }
        public string tipoBase { get; set; }
    }
}