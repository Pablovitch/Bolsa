using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public class TipoUsuario
    {
        [Key]
        public byte Id { get; set; }
        public string Tipo { get; set; }
    }
}