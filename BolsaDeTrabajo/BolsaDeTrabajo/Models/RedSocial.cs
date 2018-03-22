
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BolsaDeTrabajo.Models
{
    public class RedSocial
    {
        public RedSocial()
        {
            this.Id = Guid.NewGuid();
        }
        public Guid Id { get; set; }
        public byte TipoRedSocialId { get; set; }
        public string redSocial { get; set; }
        public Guid? PersonaId { get; set; }


        public virtual TipoRedSocial TipoRedSocial {get; set;}
        public virtual Persona Personas { get; set; }
    }
}
