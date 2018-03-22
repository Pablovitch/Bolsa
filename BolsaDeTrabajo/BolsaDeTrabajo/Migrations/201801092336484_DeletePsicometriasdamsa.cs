namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeletePsicometriasdamsa : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.PsicometriasDamsa", "DAMFO290Id", "Sist.DAMFO_290");
            DropIndex("Sist.PsicometriasDamsa", new[] { "DAMFO290Id" });
            DropTable("Sist.PsicometriasDamsa");
        }
        
        public override void Down()
        {
            CreateTable(
                "Sist.PsicometriasDamsa",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        PsicometriaId = c.Guid(nullable: false),
                        DAMFO290Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("Sist.PsicometriasDamsa", "DAMFO290Id");
            AddForeignKey("Sist.PsicometriasDamsa", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
        }
    }
}
