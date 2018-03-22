namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DBCOntexActualizacion4 : DbMigration
    {
        public override void Up()
        {
            AddColumn("sist.AspNetUsers", "claveConfirmacionEmail", c => c.Guid(nullable:true));
        }
        
        public override void Down()
        {
            DropColumn("sist.AspNetUsers", "claveConfirmacionEmail");
        }
    }
}
