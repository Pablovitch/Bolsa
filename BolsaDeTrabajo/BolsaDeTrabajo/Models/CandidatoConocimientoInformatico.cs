using System;
using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public class CandidatoConocimientoInformatico
    {
        public Guid Id { get; set; }
        public Guid ConocimientoInformaticoId { get; set; }
        public ConocimientoInformatico ConocimientoInformatico { get; set; }
        public int PorcentageId { get; set; }
        public Porcentage Porcentage { get; set; }

        public Guid CandidatoId { get; set; }

        public CandidatoConocimientoInformatico()
        {
            this.Id = Guid.NewGuid();
        }
    }
    
}
