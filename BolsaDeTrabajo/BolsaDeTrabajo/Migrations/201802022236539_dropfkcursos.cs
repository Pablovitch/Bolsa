namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dropfkcursos : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("BTra.Cursos", "InstitucionEducativaId", "BTra.InstitucionesEducativas");
            DropIndex("BTra.Cursos", new[] { "InstitucionEducativaId" });
        }
        
        public override void Down()
        {
            CreateIndex("BTra.Cursos", "InstitucionEducativaId");
            AddForeignKey("BTra.Cursos", "InstitucionEducativaId", "BTra.InstitucionesEducativas", "Id", cascadeDelete: true);
        }
    }
}
