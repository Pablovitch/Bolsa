namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddingSocialnetworks : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.RedesSociales", "PersonaId", "Sist.Personas");
            DropIndex("Sist.RedesSociales", new[] { "PersonaId" });
            AddColumn("Sist.RedesSociales", "url", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("Sist.RedesSociales", "PersonaId", c => c.Guid(nullable: false));
            CreateIndex("Sist.RedesSociales", "PersonaId");
            AddForeignKey("Sist.RedesSociales", "PersonaId", "Sist.Personas", "Id", cascadeDelete: true);
            DropColumn("Sist.RedesSociales", "redSocial");
        }
        
        public override void Down()
        {
            AddColumn("Sist.RedesSociales", "redSocial", c => c.String(nullable: false, maxLength: 100));
            DropForeignKey("Sist.RedesSociales", "PersonaId", "Sist.Personas");
            DropIndex("Sist.RedesSociales", new[] { "PersonaId" });
            AlterColumn("Sist.RedesSociales", "PersonaId", c => c.Guid());
            DropColumn("Sist.RedesSociales", "url");
            CreateIndex("Sist.RedesSociales", "PersonaId");
            AddForeignKey("Sist.RedesSociales", "PersonaId", "Sist.Personas", "Id");
        }
    }
}
