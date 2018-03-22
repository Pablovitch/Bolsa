namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpteVacanteDireccion : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.Vacantes", "ZonaId", "Sist.TiposDirecciones");
            DropIndex("Sist.Vacantes", new[] { "ZonaId" });
            AddColumn("Sist.Vacantes", "DireccionId", c => c.Guid(nullable: false));
            CreateIndex("Sist.Vacantes", "DireccionId");
            AddForeignKey("Sist.Vacantes", "DireccionId", "Sist.Direcciones", "Id", cascadeDelete: true);
            DropColumn("Sist.Vacantes", "ZonaId");
        }
        
        public override void Down()
        {
            AddColumn("Sist.Vacantes", "ZonaId", c => c.Int(nullable: false));
            DropForeignKey("Sist.Vacantes", "DireccionId", "Sist.Direcciones");
            DropIndex("Sist.Vacantes", new[] { "DireccionId" });
            DropColumn("Sist.Vacantes", "DireccionId");
            CreateIndex("Sist.Vacantes", "ZonaId");
            AddForeignKey("Sist.Vacantes", "ZonaId", "Sist.TiposDirecciones", "Id", cascadeDelete: true);
        }
    }
}
