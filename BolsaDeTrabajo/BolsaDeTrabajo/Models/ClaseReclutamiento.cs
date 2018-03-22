using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public partial class ClaseReclutamiento
    {
        public ClaseReclutamiento()
        {

        }
        [Key]
        public int Id { get; set; }
        public string clasesReclutamiento { get; set; }
    }
}