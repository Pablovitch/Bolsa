namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class deletePostulacion : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.Postulaciones", "CandidatoId", "Sist.Candidatos");
            DropForeignKey("Sist.Postulaciones", "StatusId", "Sist.StatusPostulaciones");
            DropForeignKey("Sist.Postulaciones", "VacanteId", "Sist.Vacantes");
            DropIndex("Sist.Postulaciones", new[] { "CandidatoId" });
            DropIndex("Sist.Postulaciones", new[] { "VacanteId" });
            DropIndex("Sist.Postulaciones", new[] { "StatusId" });
            DropTable("Sist.Postulaciones");
        }
        
        public override void Down()
        {
            CreateTable(
                "Sist.Postulaciones",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        CandidatoId = c.Guid(nullable: false),
                        VacanteId = c.Guid(nullable: false),
                        StatusId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("Sist.Postulaciones", "StatusId");
            CreateIndex("Sist.Postulaciones", "VacanteId");
            CreateIndex("Sist.Postulaciones", "CandidatoId");
            AddForeignKey("Sist.Postulaciones", "VacanteId", "Sist.Vacantes", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Postulaciones", "StatusId", "Sist.StatusPostulaciones", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Postulaciones", "CandidatoId", "Sist.Candidatos", "Id");
        }
    }
}
