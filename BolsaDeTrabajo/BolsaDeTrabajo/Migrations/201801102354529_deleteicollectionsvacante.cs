namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class deleteicollectionsvacante : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.AptitudesPerfil", "Vacante_Id", "Sist.Vacantes");
            DropForeignKey("Sist.BeneficiosPerfil", "Vacante_Id", "Sist.Vacantes");
            DropForeignKey("Sist.PrestacionesClientePerfil", "Vacante_Id", "Sist.Vacantes");
            DropForeignKey("Sist.PrestacionesLey", "Vacante_Id", "Sist.Vacantes");
            DropIndex("Sist.AptitudesPerfil", new[] { "Vacante_Id" });
            DropIndex("Sist.BeneficiosPerfil", new[] { "Vacante_Id" });
            DropIndex("Sist.PrestacionesClientePerfil", new[] { "Vacante_Id" });
            DropIndex("Sist.PrestacionesLey", new[] { "Vacante_Id" });
           // DropColumn("Sist.AptitudesPerfil", "Vacante_Id");
            //DropColumn("Sist.BeneficiosPerfil", "Vacante_Id");
            //DropColumn("Sist.PrestacionesClientePerfil", "Vacante_Id");
            //DropColumn("Sist.PrestacionesLey", "Vacante_Id");
        }
        
        public override void Down()
        {
            AddColumn("Sist.PrestacionesLey", "Vacante_Id", c => c.Guid());
            AddColumn("Sist.PrestacionesClientePerfil", "Vacante_Id", c => c.Guid());
            AddColumn("Sist.BeneficiosPerfil", "Vacante_Id", c => c.Guid());
            AddColumn("Sist.AptitudesPerfil", "Vacante_Id", c => c.Guid());
            CreateIndex("Sist.PrestacionesLey", "Vacante_Id");
            CreateIndex("Sist.PrestacionesClientePerfil", "Vacante_Id");
            CreateIndex("Sist.BeneficiosPerfil", "Vacante_Id");
            CreateIndex("Sist.AptitudesPerfil", "Vacante_Id");
            AddForeignKey("Sist.PrestacionesLey", "Vacante_Id", "Sist.Vacantes", "Id");
            AddForeignKey("Sist.PrestacionesClientePerfil", "Vacante_Id", "Sist.Vacantes", "Id");
            AddForeignKey("Sist.BeneficiosPerfil", "Vacante_Id", "Sist.Vacantes", "Id");
            AddForeignKey("Sist.AptitudesPerfil", "Vacante_Id", "Sist.Vacantes", "Id");
        }
    }
}
