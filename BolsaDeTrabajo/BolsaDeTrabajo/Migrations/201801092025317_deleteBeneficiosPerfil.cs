namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class deleteBeneficiosPerfil : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.BeneficiosPerfils", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.BeneficiosPerfils", "TipoBeneficioId", "Sist.TiposBeneficios");
            DropForeignKey("Sist.BeneficiosPerfils", "DAMFO290Id", "Sist.Vacantes");
            DropIndex("Sist.BeneficiosPerfil", new[] { "TipoBeneficioId" });
            DropIndex("Sist.BeneficiosPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.BeneficiosPerfil", new[] { "DAMFO290Id" });
            DropTable("Sist.BeneficiosPerfil");
        }
        
        public override void Down()
        {
            CreateTable(
                "Sist.BeneficiosPerfils",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        TipoBeneficioId = c.Int(nullable: false),
                        Cantidad = c.Single(nullable: false),
                        Observaciones = c.String(),
                        DAMFO290Id = c.Guid(nullable: false),
                        Vacante_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("Sist.BeneficiosPerfils", "Vacante_Id");
            CreateIndex("Sist.BeneficiosPerfils", "DAMFO290Id");
            CreateIndex("Sist.BeneficiosPerfils", "TipoBeneficioId");
            AddForeignKey("Sist.BeneficiosPerfils", "Vacante_Id", "Sist.Vacantes", "Id");
            AddForeignKey("Sist.BeneficiosPerfils", "TipoBeneficioId", "Sist.TiposBeneficios", "Id", cascadeDelete: true);
            AddForeignKey("Sist.BeneficiosPerfils", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
        }
    }
}
