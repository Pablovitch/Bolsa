namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dropAptitudesperfilVacante : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.AptitudesPerfil", "DAMFO290Id", "Sist.Vacantes");
            //DropForeignKey("Sist.Vacantes", "GradoEstudioId", "Sist.GradosEstudios");
            DropIndex("Sist.AptitudesPerfil", new[] { "DAMFO290Id" });
            //DropIndex("Sist.Vacantes", new[] { "GradoEstudioId" });
        }
        
        public override void Down()
        {
        }
    }
}
