using System;
using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public class PsicometriasDamsaRequi
    {
        [Key]
        public Guid Id { get; set; }
        public int PsicometriaId { get; set; }
        public Guid RequisicionId { get; set; }

        public virtual Requisicion Requisicion { get; set; }
        public virtual TipoPsicometria Psicometria { get; set; }

        public PsicometriasDamsaRequi()
        {
            this.Id = Guid.NewGuid();
        }
    }
}