namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class migrationx : DbMigration
    {
        public override void Up()
        {
            AddColumn("sist.AspNetUsers", "claveConfirmacionEmail", c => c.Guid());
        }
        
        public override void Down()
        {
            DropColumn("sist.AspNetUsers", "claveConfirmacionEmail");
        }
    }
}
