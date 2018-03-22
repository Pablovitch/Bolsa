namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DireccionChangue : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.Direcciones", "ColoniaId", "Sist.Colonias");
            DropForeignKey("Sist.Direcciones", "EstadoId", "Sist.Estados");
            DropForeignKey("Sist.Direcciones", "MunicipioId", "Sist.Municipios");
            DropIndex("Sist.Direcciones", new[] { "EstadoId" });
            DropIndex("Sist.Direcciones", new[] { "MunicipioId" });
            DropIndex("Sist.Direcciones", new[] { "ColoniaId" });
            AlterColumn("Sist.Direcciones", "EstadoId", c => c.Int());
            AlterColumn("Sist.Direcciones", "MunicipioId", c => c.Int());
            AlterColumn("Sist.Direcciones", "ColoniaId", c => c.Int());
            CreateIndex("Sist.Direcciones", "EstadoId");
            CreateIndex("Sist.Direcciones", "MunicipioId");
            CreateIndex("Sist.Direcciones", "ColoniaId");
            AddForeignKey("Sist.Direcciones", "ColoniaId", "Sist.Colonias", "Id");
            AddForeignKey("Sist.Direcciones", "EstadoId", "Sist.Estados", "Id");
            AddForeignKey("Sist.Direcciones", "MunicipioId", "Sist.Municipios", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.Direcciones", "MunicipioId", "Sist.Municipios");
            DropForeignKey("Sist.Direcciones", "EstadoId", "Sist.Estados");
            DropForeignKey("Sist.Direcciones", "ColoniaId", "Sist.Colonias");
            DropIndex("Sist.Direcciones", new[] { "ColoniaId" });
            DropIndex("Sist.Direcciones", new[] { "MunicipioId" });
            DropIndex("Sist.Direcciones", new[] { "EstadoId" });
            AlterColumn("Sist.Direcciones", "ColoniaId", c => c.Int(nullable: false));
            AlterColumn("Sist.Direcciones", "MunicipioId", c => c.Int(nullable: false));
            AlterColumn("Sist.Direcciones", "EstadoId", c => c.Int(nullable: false));
            CreateIndex("Sist.Direcciones", "ColoniaId");
            CreateIndex("Sist.Direcciones", "MunicipioId");
            CreateIndex("Sist.Direcciones", "EstadoId");
            AddForeignKey("Sist.Direcciones", "MunicipioId", "Sist.Municipios", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Direcciones", "EstadoId", "Sist.Estados", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Direcciones", "ColoniaId", "Sist.Colonias", "Id", cascadeDelete: true);
        }
    }
}
