namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class aboutmeChangue : DbMigration
    {
        public override void Up()
        {
            AddColumn("Sist.AcercaDeMi", "SitioWeb", c => c.String(maxLength:100));
        }
        
        public override void Down()
        {
            DropColumn("Sist.AcercaDeMi", "SitioWeb");
        }
    }
}
