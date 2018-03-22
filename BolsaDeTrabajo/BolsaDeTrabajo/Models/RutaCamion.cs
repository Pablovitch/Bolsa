using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public partial class RutaCamion
    {
        public RutaCamion()
        {
            this.Id = Guid.NewGuid();
        }
        public Guid Id { get; set; }
        public string Ruta { get; set; }
        public string Via { get; set; }
        public Guid DireccionId { get; set; }

        public virtual Direccion Direcciones { get; set; }
    }
}
