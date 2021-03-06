﻿using System;
using System.ComponentModel.DataAnnotations;

namespace BolsaDeTrabajo.Models
{
    public class AsignacionRequi
    {
        [Key]
        public Guid Id { get; set; }
        public Guid RequisicionId { get; set; }
        public Guid GrpUsrId { get; set; }
        public string CRUD { get; set; }

        public virtual Requisicion Requisicion { get; set; }
        public virtual Persona GrpUsr { get; set; }

        public AsignacionRequi()
        {
            this.Id = Guid.NewGuid();
        }
    }
}