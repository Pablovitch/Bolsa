namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AspNetUsers : DbMigration
    {
        public override void Up()
        {
            AlterColumn("Sist.AspNetUsers", "IdPersona", c => c.Guid(nullable: true));
        }
        
        public override void Down()
        {
            AlterColumn("Sist.AspNetUsers", "IdPersona", c => c.Guid());
        }
    }
}
