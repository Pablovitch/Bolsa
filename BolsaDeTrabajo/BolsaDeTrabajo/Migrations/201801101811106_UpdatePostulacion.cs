namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatePostulacion : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Sist.Postulaciones",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity:true),
                        CandidatoId = c.Guid(nullable: false),
                        VacanteId = c.Guid(nullable: false),
                        StatusId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Candidatos", t => t.CandidatoId)
                .ForeignKey("Sist.StatusPostulaciones", t => t.StatusId, cascadeDelete: false)
                .ForeignKey("Sist.Vacantes", t => t.VacanteId, cascadeDelete: false)
                .Index(t => t.CandidatoId)
                .Index(t => t.VacanteId)
                .Index(t => t.StatusId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.Postulaciones", "VacanteId", "Sist.Vacantes");
            DropForeignKey("Sist.Postulaciones", "StatusId", "Sist.StatusPostulaciones");
            DropForeignKey("Sist.Postulaciones", "CandidatoId", "Sist.Candidatos");
            DropIndex("Sist.Postulaciones", new[] { "StatusId" });
            DropIndex("Sist.Postulaciones", new[] { "VacanteId" });
            DropIndex("Sist.Postulaciones", new[] { "CandidatoId" });
            DropTable("Sist.Postulaciones");
        }
    }
}
