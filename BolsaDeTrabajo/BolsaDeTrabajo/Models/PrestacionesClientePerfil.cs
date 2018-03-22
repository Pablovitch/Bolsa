using System;
using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public class PrestacionesClientePerfil
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }
        public string Prestamo { get; set; }
        public Guid DAMFO290Id { get; set; }

        public virtual DAMFO_290 DAMFO290 { get; set; }

        public PrestacionesClientePerfil()
        {
            this.Id = Guid.NewGuid();
        }
    }
}