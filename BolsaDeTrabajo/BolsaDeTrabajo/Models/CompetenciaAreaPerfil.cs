﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BolsaDeTrabajo.Models
{
    public class CompetenciaAreaPerfil
    {
       //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }
        public int CompetenciaId { get; set; }
        public string Nivel  { get; set; }
        public Guid  DAMFO290Id { get; set; }

        public virtual DAMFO_290 DAMFO290 { get; set; }
        public virtual CompetenciaArea Competencia { get; set; }

        public CompetenciaAreaPerfil()
        {
            this.Id = Guid.NewGuid();
        }
    }
}