using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public partial class TipoEmpresa
    {
        public TipoEmpresa()
        {

        }
        [Key]
        public int Id { get; set; }
        public string tipoEmpresa { get; set; }
    }
}