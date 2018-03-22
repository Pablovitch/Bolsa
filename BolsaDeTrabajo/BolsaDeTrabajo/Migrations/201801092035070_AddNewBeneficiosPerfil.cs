namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddNewBeneficiosPerfil : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Sist.BeneficiosPerfil",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity:true),
                        TipoBeneficioId = c.Int(nullable: false),
                        Cantidad = c.Single(nullable: false),
                        Observaciones = c.String(maxLength: 500, unicode: false),
                        DAMFO290Id = c.Guid(nullable: false)
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .ForeignKey("Sist.TiposBeneficios", t => t.TipoBeneficioId, cascadeDelete: false)
                .ForeignKey("Sist.Vacantes", t => t.DAMFO290Id)
                .Index(t => t.TipoBeneficioId) 
                .Index(t => t.DAMFO290Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.BeneficiosPerfil", "Vacante_Id", "Sist.Vacantes");
            DropForeignKey("Sist.BeneficiosPerfil", "TipoBeneficioId", "Sist.TiposBeneficios");
            DropForeignKey("Sist.BeneficiosPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropIndex("Sist.BeneficiosPerfil", new[] { "Vacante_Id" });
            DropIndex("Sist.BeneficiosPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.BeneficiosPerfil", new[] { "TipoBeneficioId" });
            DropTable("Sist.BeneficiosPerfil");
        }
    }
}
