namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class urlChangueforredSocial : DbMigration
    {
        public override void Up()
        {
            AddColumn("Sist.RedesSociales", "redSocial", c => c.String(nullable: false, maxLength: 100));
            DropColumn("Sist.RedesSociales", "url");
        }
        
        public override void Down()
        {
            AddColumn("Sist.RedesSociales", "url", c => c.String(nullable: false, maxLength: 100));
            DropColumn("Sist.RedesSociales", "redSocial");
        }
    }
}
