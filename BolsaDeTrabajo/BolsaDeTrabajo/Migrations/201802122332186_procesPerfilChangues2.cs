namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class procesPerfilChangues2 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Recl.ProcesoPerfil",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Proceso = c.String(nullable: false, maxLength: 100),
                        DAMFO290Id = c.Guid(nullable: false),
                        Orden = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Recl.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: true)
                .Index(t => t.DAMFO290Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("Recl.ProcesoPerfil", "DAMFO290Id", "Recl.DAMFO_290");
            DropIndex("Recl.ProcesoPerfil", new[] { "DAMFO290Id" });
            DropTable("Recl.ProcesoPerfil");
        }
    }
}
