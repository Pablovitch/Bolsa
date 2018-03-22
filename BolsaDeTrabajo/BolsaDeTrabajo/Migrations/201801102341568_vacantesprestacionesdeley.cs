namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class vacantesprestacionesdeley : DbMigration
    {
        public override void Up()
        {
            //AddColumn("Sist.PrestacionesLey", "Vacante_Id", c => c.Guid());
            //CreateIndex("Sist.PrestacionesLey", "Vacante_Id");
            //AddForeignKey("Sist.PrestacionesLey", "Vacante_Id", "Sist.Vacantes", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.PrestacionesLey", "Vacante_Id", "Sist.Vacantes");
            DropIndex("Sist.PrestacionesLey", new[] { "Vacante_Id" });
            DropColumn("Sist.PrestacionesLey", "Vacante_Id");
        }
    }
}
