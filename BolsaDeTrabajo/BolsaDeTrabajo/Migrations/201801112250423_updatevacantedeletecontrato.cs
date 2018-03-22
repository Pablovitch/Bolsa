namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatevacantedeletecontrato : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.Vacantes", "TipoContratoId", "Sist.TiposContratos");
            DropIndex("Sist.Vacantes", new[] { "TipoContratoId" });
            DropColumn("Sist.Vacantes", "TipoContratoId");
        }
        
        public override void Down()
        {
            AddColumn("Sist.Vacantes", "TipoContratoId", c => c.Int(nullable: false));
            CreateIndex("Sist.Vacantes", "TipoContratoId");
            AddForeignKey("Sist.Vacantes", "TipoContratoId", "Sist.TiposContratos", "Id", cascadeDelete: true);
        }
    }
}
