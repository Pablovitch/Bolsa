using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BolsaDeTrabajo.Dtos
{
    public class VctsGralDto
    {
        public ICollection<VctosDto> Vacantes { get; set; }
        public ICollection<Area> Categorias { get; set; }
        public ICollection<Estado> Estados { get; set; }
        public ICollection<Municipio> Municipios { get; set; }
        public ICollection<EstadoEstudio> EstadoEstudios { get; set; }
        public ICollection<GradoEstudio> Escolaridades { get; set; }
    }
}