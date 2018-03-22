using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class PerfilCandidatoDto
    {
        public int Id { get; set; }
        public int CandidatoId { get; set; }
        public ICollection<AboutMe> AcercaDeMi { get; set; }
        public ICollection<Formacion> Formaciones { get; set; }
        public ICollection<PerfilIdioma> Idiomas { get; set; }
    }
}