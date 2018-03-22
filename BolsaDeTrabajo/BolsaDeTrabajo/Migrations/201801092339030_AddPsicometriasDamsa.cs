namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPsicometriasDamsa : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Sist.PsicometriasDamsa",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity:true),
                        PsicometriaId = c.Int(nullable: false),
                        DAMFO290Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .ForeignKey("Sist.TiposPsicometrias", t => t.PsicometriaId, cascadeDelete: false)
                .Index(t => t.PsicometriaId)
                .Index(t => t.DAMFO290Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.PsicometriasDamsa", "PsicometriaId", "Sist.TiposPsicometrias");
            DropForeignKey("Sist.PsicometriasDamsa", "DAMFO290Id", "Sist.DAMFO_290");
            DropIndex("Sist.PsicometriasDamsa", new[] { "DAMFO290Id" });
            DropIndex("Sist.PsicometriasDamsa", new[] { "PsicometriaId" });
            DropTable("Sist.PsicometriasDamsa");
        }
    }
}
