using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public partial class TamanoEmpresa
    {
        public TamanoEmpresa()
        {

        }
        [Key]
        public int Id { get; set; }
        public string tamanoEmpresa { get; set; }
    }
}