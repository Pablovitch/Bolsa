﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public class TipodeNomina
    {
        [Key]
        public int Id { get; set; }
        public string tipoDeNomina { get; set; }
    }
}
