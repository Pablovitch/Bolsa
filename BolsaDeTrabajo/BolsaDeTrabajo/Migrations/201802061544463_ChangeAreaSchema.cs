namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeAreaSchema : DbMigration
    {
        public override void Up()
        {
            MoveTable(name: "Recl.Areas", newSchema: "BTra");
        }
        
        public override void Down()
        {
            MoveTable(name: "BTra.Areas", newSchema: "Recl");
        }
    }
}
