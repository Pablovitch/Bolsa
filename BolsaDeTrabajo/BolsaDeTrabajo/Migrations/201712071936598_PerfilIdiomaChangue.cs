namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PerfilIdiomaChangue : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "Sist.PerfilIdiomas", name: "NivelId", newName: "NivelEscritoId");
            RenameIndex(table: "Sist.PerfilIdiomas", name: "IX_NivelId", newName: "IX_NivelEscritoId");
            AddColumn("Sist.PerfilIdiomas", "NivelHabladoId", c => c.Byte(nullable: false));
            CreateIndex("Sist.PerfilIdiomas", "NivelHabladoId");
            AddForeignKey("Sist.PerfilIdiomas", "NivelHabladoId", "Sist.Niveles", "Id", cascadeDelete: false);
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.PerfilIdiomas", "NivelHabladoId", "Sist.Niveles");
            DropIndex("Sist.PerfilIdiomas", new[] { "NivelHabladoId" });
            DropColumn("Sist.PerfilIdiomas", "NivelHabladoId");
            RenameIndex(table: "Sist.PerfilIdiomas", name: "IX_NivelEscritoId", newName: "IX_NivelId");
            RenameColumn(table: "Sist.PerfilIdiomas", name: "NivelEscritoId", newName: "NivelId");
        }
    }
}
