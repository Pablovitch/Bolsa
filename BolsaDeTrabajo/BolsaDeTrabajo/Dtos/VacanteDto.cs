using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;

namespace BolsaDeTrabajo.Dtos
{
    public class VacanteDto
    {
        public Guid Id { get; set; }
        public string VBtra { get; set; }
        public string Experiencia { get; set; }
        public Guid DireccionId { get; set; }
        public int AreaId { get; set; }
        public Guid ClienteId { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int GradoEstudioId { get; set; }
        public Guid HorarioId { get; set; }
        public int ContratoInicialId { get; set; }
        public int ContratoFinalId { get; set; }
        public decimal SueldoMinimo { get; set; }

        public Guid DAMFO290Id { get; set; }
         
         
        public virtual Direccion Direccion { get; set; }
        public virtual Area Area { get; set; }
        public virtual Cliente Cliente { get; set; }
        public virtual HorarioRequi Horario { get; set; }
        public virtual TipoContrato ContratoInicial { get; set; }
        public virtual TipoContrato ContratoFinal { get; set; }

        public virtual ICollection<AptitudesRequi> aptitudesRequi { get; set; }
        public virtual ICollection<BeneficiosRequi> beneficiosRequi { get; set; }
        public virtual ICollection<PrestacionesClienteRequi> prestacionesClienteRequi { get; set; }
        public virtual ICollection<PrestacionLey> PrestacionesLey { get; set; } 

        public virtual ICollection<EscolaridadesRequi> escolaridadesRequi { get; set; }
        public virtual ICollection<ActividadesRequi> actividadesRequi { get; set; }
    }
}