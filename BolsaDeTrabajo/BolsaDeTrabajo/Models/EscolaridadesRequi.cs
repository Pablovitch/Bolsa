﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public class EscolaridadesRequi
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }
        public int EscolaridadId { get; set; }
        public int EstadoEstudioId { get; set; }
        public Guid RequisicionId { get; set; }

        public Requisicion Requisicion { get; set; }
        public virtual GradoEstudio Escolaridad { get; set; }
        public virtual EstadoEstudio EstadoEstudio { get; set; }

        public EscolaridadesRequi()
        {
            this.Id = Guid.NewGuid();
        }

    }
}
