using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public class TipoTelefono
    {
        [Key]
        public byte Id { get; set; }
        public string Tipo { get; set; } 
    }
}