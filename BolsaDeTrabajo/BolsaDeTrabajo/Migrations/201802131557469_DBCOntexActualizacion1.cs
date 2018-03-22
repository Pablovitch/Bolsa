namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DBCOntexActualizacion1 : DbMigration
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
            DropPrimaryKey("Recl.ProcesoPerfil");
            AlterColumn("Recl.ProcesoPerfil", "Id", c => c.Guid(nullable: false));
            AlterColumn("Recl.HorariosPerfiles", "Especificaciones", c => c.String(nullable: false, maxLength: 500));
            DropColumn("sist.AspNetUsers", "claveConfirmacionEmail");
            DropColumn("Recl.ProcesoPerfil", "Orden");
            AddPrimaryKey("Recl.ProcesoPerfil", "Id");
        }
    }
}
