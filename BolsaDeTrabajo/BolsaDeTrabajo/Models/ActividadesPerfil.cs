using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BolsaDeTrabajo.Models
{
    public class ActividadesPerfil
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }
        public string Actividades { get; set; }
        public Guid  DAMFO290Id { get; set; }

        public virtual DAMFO_290 DAMFO290 { get; set; }

        public ActividadesPerfil()
        {
            this.Id = Guid.NewGuid();
        }
    }
}