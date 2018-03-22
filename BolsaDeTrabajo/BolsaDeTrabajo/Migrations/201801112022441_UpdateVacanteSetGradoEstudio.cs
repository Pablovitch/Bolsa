namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateVacanteSetGradoEstudio : DbMigration
    {
        public override void Up()
        {
            AddColumn("Sist.Vacantes", "EstadoEstudioId", c => c.Int(nullable: false));
            AddColumn("Sist.Vacantes", "GradoEstudioId", c => c.Int(nullable: false));
            CreateIndex("Sist.Vacantes", "EstadoEstudioId");
            CreateIndex("Sist.Vacantes", "GradoEstudioId");
            AddForeignKey("Sist.Vacantes", "EstadoEstudioId", "Sist.EstadosEstudios", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Vacantes", "GradoEstudioId", "Sist.GradosEstudios", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.Vacantes", "GradoEstudioId", "Sist.GradosEstudios");
            DropForeignKey("Sist.Vacantes", "EstadoEstudioId", "Sist.EstadosEstudios");
            DropIndex("Sist.Vacantes", new[] { "GradoEstudioId" });
            DropIndex("Sist.Vacantes", new[] { "EstadoEstudioId" });
            DropColumn("Sist.Vacantes", "GradoEstudioId");
            DropColumn("Sist.Vacantes", "EstadoEstudioId");
        }
    }
}
