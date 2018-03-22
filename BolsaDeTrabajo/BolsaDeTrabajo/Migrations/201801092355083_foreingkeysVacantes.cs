namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class foreingkeysVacantes : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.BeneficiosPerfil", "DAMFO290Id", "Sist.Vacantes");
            DropForeignKey("Sist.PrestacionesClientePerfil", "DAMFO290Id", "Sist.Vacantes");
            DropIndex("Sist.BeneficiosPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.PrestacionesClientePerfil", new[] { "DAMFO290Id" });
            //DropColumn("Sist.BeneficiosPerfil", "DAMFO290Id");
            //DropColumn("Sist.PrestacionesClientePerfil", "DAMFO290Id");
        }
        
        public override void Down()
        {
            AddColumn("Sist.PrestacionesClientePerfil", "Vacante_Id", c => c.Guid());
            AddColumn("Sist.BeneficiosPerfil", "Vacante_Id", c => c.Guid());
            CreateIndex("Sist.PrestacionesClientePerfil", "Vacante_Id");
            CreateIndex("Sist.BeneficiosPerfil", "Vacante_Id");
            AddForeignKey("Sist.PrestacionesClientePerfil", "Vacante_Id", "Sist.Vacantes", "Id");
            AddForeignKey("Sist.BeneficiosPerfil", "Vacante_Id", "Sist.Vacantes", "Id");
        }
    }
}
