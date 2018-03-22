using BolsaDeTrabajo.Models;
using System;

namespace BolsaDeTrabajo.Dtos
{
        public class AboutMeDto
        {
            public Guid Id { get; set; }
            public string AcercaDeMi { get; set; }
            public decimal SalarioAceptable { get; set; }
            public decimal SalarioDeseado { get; set; }
            public string PuestoDeseado { get; set; }
            public int AreaExperienciaId { get; set; }
            public virtual AreaExperiencia AreaExperiencia { get; set; }
            public int? AreaInteresId { get; set; }
            public virtual AreaInteres AreaInteres { get; set; }
            public Guid CandidatoId { get; set; }
            public virtual Candidato Candidato { get; set; }
            public int? PerfilExperienciaId { get; set; }
            public virtual PerfilExperiencia PerfilExperiencia { get; set; }

            public string SitioWeb { get; set; }

            public Guid PerfilCandidatoId { get; set; }
            public virtual PerfilCandidato PerfilCandidato { get; set; }

    }   
}