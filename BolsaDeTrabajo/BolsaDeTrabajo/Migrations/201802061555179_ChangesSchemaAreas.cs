namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangesSchemaAreas : DbMigration
    {
        public override void Up()
        {
            MoveTable(name: "BTra.Areas", newSchema: "Sist");
        }
        
        public override void Down()
        {
            MoveTable(name: "Sist.Areas", newSchema: "BTra");
        }
    }
}
