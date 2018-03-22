using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;


namespace BolsaDeTrabajo.Dtos
{
    public class VacantesDto
    {
        public Guid Id { get; set; }
        public Guid ClienteId { get; set; }
        public string VBtra { get; set; }
        public int AreaId { get; set; }
        public string Experiencia { get; set; }
        public decimal SueldoMinimo { get; set; }
        public decimal SueldoMaximo { get; set; }
        public DateTime FechaAprobacion { get; set; }
        public int PrioridadId { get; set; }
        public Boolean Aprobada { get; set; }
        public int EstatusId { get; set; }
        public Guid HorarioId { get; set; }
        public Guid DireccionId { get; set; }

        public virtual Area Area { get; set; }
        public virtual Cliente Cliente { get; set; }
        public virtual Prioridad Prioridad { get; set; }
        public virtual Estatus Estatus { get; set; }
        public virtual HorarioRequi Horario { get; set; }
        public virtual Direccion Direccion { get; set; }


        public virtual ICollection<PrestacionLey> PrestacionesLey { get; set; }

        public virtual ICollection<EscolaridadesRequi> escolaridadesRequi { get; set; }
        public virtual ICollection<AptitudesRequi> aptitudesRequi { get; set; }
        public virtual ICollection<ActividadesRequi> actividadesRequi { get; set; }
        public virtual ICollection<BeneficiosRequi> beneficiosRequi { get; set; }
        public virtual ICollection<PrestacionesClienteRequi> prestacionesClienteRequi { get; set; }
    }
}