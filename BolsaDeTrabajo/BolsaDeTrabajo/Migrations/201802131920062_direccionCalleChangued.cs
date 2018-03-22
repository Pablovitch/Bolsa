namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class direccionCalleChangued : DbMigration
    {
        public override void Up()
        {
            AlterColumn("sist.Direcciones", "Calle", c => c.String(maxLength: 100));
        }
        
        public override void Down()
        {
            AlterColumn("sist.Direcciones", "Calle", c => c.String(nullable: false, maxLength: 100));
        }
    }
}
