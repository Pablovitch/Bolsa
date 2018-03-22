namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateVacanteDeleteNivel : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.Vacantes", "EscolaridadId", "Sist.EstadosEstudios");
            DropForeignKey("Sist.Vacantes", "NivelId", "Sist.Niveles");
            DropIndex("Sist.Vacantes", new[] { "EscolaridadId" });
            DropIndex("Sist.Vacantes", new[] { "NivelId" });
            DropColumn("Sist.Vacantes", "EscolaridadId");
            DropColumn("Sist.Vacantes", "NivelId");
        }
        
        public override void Down()
        {
            AddColumn("Sist.Vacantes", "NivelId", c => c.Byte(nullable: false));
            AddColumn("Sist.Vacantes", "EscolaridadId", c => c.Int(nullable: false));
            CreateIndex("Sist.Vacantes", "NivelId");
            CreateIndex("Sist.Vacantes", "EscolaridadId");
            AddForeignKey("Sist.Vacantes", "NivelId", "Sist.Niveles", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Vacantes", "EscolaridadId", "Sist.EstadosEstudios", "Id", cascadeDelete: true);
        }
    }
}
