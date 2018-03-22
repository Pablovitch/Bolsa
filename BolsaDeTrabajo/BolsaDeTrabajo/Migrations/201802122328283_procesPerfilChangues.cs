namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class procesPerfilChangues : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Recl.ProcesoPerfil", "DAMFO290Id", "Recl.DAMFO_290");
            DropIndex("Recl.ProcesoPerfil", new[] { "DAMFO290Id" });
            AddColumn("sist.AspNetUsers", "claveConfirmacionEmail", c => c.Guid());
            AlterColumn("Recl.HorariosPerfiles", "Especificaciones", c => c.String(maxLength: 500));
            DropTable("Recl.ProcesoPerfil");
        }
        
        public override void Down()
        {
            CreateTable(
                "Recl.ProcesoPerfil",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Proceso = c.String(nullable: false, maxLength: 100),
                        DAMFO290Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AlterColumn("Recl.HorariosPerfiles", "Especificaciones", c => c.String(nullable: false, maxLength: 500));
            DropColumn("sist.AspNetUsers", "claveConfirmacionEmail");
            CreateIndex("Recl.ProcesoPerfil", "DAMFO290Id");
            AddForeignKey("Recl.ProcesoPerfil", "DAMFO290Id", "Recl.DAMFO_290", "Id", cascadeDelete: true);
        }
    }
}
