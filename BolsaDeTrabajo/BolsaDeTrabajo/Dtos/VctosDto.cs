using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class VctosDto
    {
        public Guid Id { get; set; }
        public string VBtra { get; set; }
        public string Experiencia { get; set; }
        public decimal SueldoMinimo { get; set; }
        public decimal SueldoMaximo { get; set; }
        public DateTime FechaAprobacion { get; set; }
        public int PrioridadId { get; set; }
        public Boolean Aprobada { get; set; }
        public int EstatusId { get; set; }
        public Guid HorarioId { get; set; }
        public string Horario1 { get; set; }
        public string Horario2 { get; set; }
        public int estadoid { get; set; }
        public string estado{ get; set; }
        public int municipioid { get; set; }
        public string municipio { get; set; }
        public string categoria { get; set; }
        public int categoriaId { get; set; }
        public int estadoestudioid { get; set; }
        public string estadoestudio { get; set; }
        public int escolaridadid { get; set; }
        public string escolaridad { get; set; }
    }
}