namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateVacanteSalarioContrato : DbMigration
    {
        public override void Up()
        {
            AddColumn("Sist.Vacantes", "ContratoInicialId", c => c.Int(nullable: false));
            AddColumn("Sist.Vacantes", "ContratoFinalId", c => c.Int(nullable: false));
            AddColumn("Sist.Vacantes", "SueldoMinimo", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            CreateIndex("Sist.Vacantes", "ContratoInicialId");
            CreateIndex("Sist.Vacantes", "ContratoFinalId");
            AddForeignKey("Sist.Vacantes", "ContratoFinalId", "Sist.TiposContratos", "Id", cascadeDelete: false);
            AddForeignKey("Sist.Vacantes", "ContratoInicialId", "Sist.TiposContratos", "Id", cascadeDelete: false);
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.Vacantes", "ContratoInicialId", "Sist.TiposContratos");
            DropForeignKey("Sist.Vacantes", "ContratoFinalId", "Sist.TiposContratos");
            DropIndex("Sist.Vacantes", new[] { "ContratoFinalId" });
            DropIndex("Sist.Vacantes", new[] { "ContratoInicialId" });
            DropColumn("Sist.Vacantes", "SueldoMinimo");
            DropColumn("Sist.Vacantes", "ContratoFinalId");
            DropColumn("Sist.Vacantes", "ContratoInicialId");
        }
    }
}
