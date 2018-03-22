namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class formulariosInicialesChangues : DbMigration
    {
        public override void Up()
        {
            AddColumn("Sist.FormulariosIniciales", "Paso", c => c.Int(nullable: false));
            DropColumn("Sist.FormulariosIniciales", "Paso1");
            DropColumn("Sist.FormulariosIniciales", "Paso2");
            DropColumn("Sist.FormulariosIniciales", "Paso3");
        }
        
        public override void Down()
        {
            AddColumn("Sist.FormulariosIniciales", "Paso3", c => c.Boolean(nullable: false));
            AddColumn("Sist.FormulariosIniciales", "Paso2", c => c.Boolean(nullable: false));
            AddColumn("Sist.FormulariosIniciales", "Paso1", c => c.Boolean(nullable: false));
            DropColumn("Sist.FormulariosIniciales", "Paso");
        }
    }
}
