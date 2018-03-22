namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DBCOntexActualizacion6 : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("Recl.ProcesoPerfil");
            AddColumn("Recl.ProcesoPerfil", "Orden", c => c.Int(nullable: false));
            AddColumn("sist.AspNetUsers", "claveConfirmacionEmail", c => c.Guid());
            AlterColumn("Recl.HorariosPerfiles", "Especificaciones", c => c.String(maxLength: 500));
            AlterColumn("Recl.ProcesoPerfil", "Id", c => c.Guid(nullable: false, identity: true));
            AddPrimaryKey("Recl.ProcesoPerfil", "Id");
        }

        public override void Down()
        {
        }
    }
}
