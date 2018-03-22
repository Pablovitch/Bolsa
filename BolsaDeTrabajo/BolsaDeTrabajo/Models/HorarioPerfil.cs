using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public partial class HorarioPerfil
    {
        public  HorarioPerfil()
        {
            this.Id = Guid.NewGuid();
        }
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public byte deDiaId { get; set; }
        public byte aDiaId { get; set; }
        public string deHora { get; set; }
        public string aHora { get; set; }
        public byte numeroVacantes { get; set; }
        public string Especificaciones { get; set; }
        public Guid DAMFO290Id { get; set; }
        public bool Activo { get; set; }

        public virtual DAMFO_290 DAMFO290 { get; set; }
        public virtual DiaSemana deDia { get; set; }
        public virtual DiaSemana aDia { get; set; }
    }
}
