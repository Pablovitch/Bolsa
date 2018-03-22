using System;
using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public class ActividadesRequi
    {
        [Key]
        public Guid Id { get; set; }
        public string Actividades { get; set; }
        public Guid RequisicionId { get; set; }

        public virtual Requisicion Requisicion { get; set; }

        public ActividadesRequi()
        {
            this.Id = Guid.NewGuid();
        }
    }
}