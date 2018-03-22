namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SitioWebAboutMe : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "Btra.AcercaDeMi", name: "sitioWeb", newName: "SitioWeb");
        }
        
        public override void Down()
        {
        }
    }
}
