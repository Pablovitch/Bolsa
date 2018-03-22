namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DBCOntexActualizacion3 : DbMigration
    {
        public override void Up()
        {
            //DropColumn("sist.AspNetUsers", "claveConfirmacionEmail");
        }
        
        public override void Down()
        {
            AddColumn("sist.AspNetUsers", "claveConfirmacionEmail", c => c.Guid());
        }
    }
}
