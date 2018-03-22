using System;

namespace BolsaDeTrabajo.Models
{
    public class TelefonoPerfil
    {
        public Guid Id { get; set; }
        public Guid telefonoId { get; set; }
        public Guid DAMFO290Id { get; set; }

        public virtual Telefono Telefonos { get; set; }
        public virtual DAMFO_290 DAMFO290 { get; set; }
    }
}