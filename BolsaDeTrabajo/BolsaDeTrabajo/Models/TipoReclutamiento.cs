using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public partial class TipoReclutamiento
    {
        public TipoReclutamiento()
        {

        }
        [Key]
        public int Id { get; set; }
        public string tipoReclutamiento { get; set; }
    }
}