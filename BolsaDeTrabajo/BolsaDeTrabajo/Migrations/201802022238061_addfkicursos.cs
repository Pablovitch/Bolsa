namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addfkicursos : DbMigration
    {
        public override void Up()
        {
            CreateIndex("BTra.Cursos", "InstitucionEducativaId");
            AddForeignKey("BTra.Cursos", "InstitucionEducativaId", "BTra.InstitucionesEducativas", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("BTra.Cursos", "InstitucionEducativaId", "BTra.InstitucionesEducativas");
            DropIndex("BTra.Cursos", new[] { "InstitucionEducativaId" });
        }
    }
}
