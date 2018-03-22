namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateCliente : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.Agencias", "PersonaId", "Sist.Personas");
            DropIndex("Sist.Agencias", new[] { "PersonaId" });
            AddColumn("Sist.Clientes", "Activo", c => c.Boolean(nullable: false));
            AddColumn("Sist.Contactos", "ClienteId", c => c.Guid(nullable: false));
            AddColumn("Sist.Referenciados", "Clave", c => c.String(nullable: false, maxLength: 100));
            AddColumn("Sist.Referenciados", "ClienteId", c => c.Guid(nullable: false));
            AddColumn("Sist.Agencias", "ClienteId", c => c.Guid(nullable: false));
            CreateIndex("Sist.Agencias", "ClienteId");
            CreateIndex("Sist.Contactos", "ClienteId");
            CreateIndex("Sist.Referenciados", "ClienteId");
            AddForeignKey("Sist.Agencias", "ClienteId", "Sist.Clientes", "Id");
            AddForeignKey("Sist.Contactos", "ClienteId", "Sist.Clientes", "Id");
            AddForeignKey("Sist.Referenciados", "ClienteId", "Sist.Clientes", "Id");
            DropColumn("Sist.Referenciados", "DAL");
            DropColumn("Sist.Agencias", "PersonaId");
        }
        
        public override void Down()
        {
            AddColumn("Sist.Agencias", "PersonaId", c => c.Guid(nullable: false));
            AddColumn("Sist.Referenciados", "DAL", c => c.String(nullable: false, maxLength: 100));
            DropForeignKey("Sist.Referenciados", "ClienteId", "Sist.Clientes");
            DropForeignKey("Sist.Contactos", "ClienteId", "Sist.Clientes");
            DropForeignKey("Sist.Agencias", "ClienteId", "Sist.Clientes");
            DropIndex("Sist.Referenciados", new[] { "ClienteId" });
            DropIndex("Sist.Contactos", new[] { "ClienteId" });
            DropIndex("Sist.Agencias", new[] { "ClienteId" });
            DropColumn("Sist.Agencias", "ClienteId");
            DropColumn("Sist.Referenciados", "ClienteId");
            DropColumn("Sist.Referenciados", "Clave");
            DropColumn("Sist.Contactos", "ClienteId");
            DropColumn("Sist.Clientes", "Activo");
            CreateIndex("Sist.Agencias", "PersonaId");
            AddForeignKey("Sist.Agencias", "PersonaId", "Sist.Personas", "Id", cascadeDelete: true);
        }
    }
}
