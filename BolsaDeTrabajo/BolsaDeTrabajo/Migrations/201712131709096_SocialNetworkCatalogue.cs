namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SocialNetworkCatalogue : DbMigration
    {
        public override void Up()
        {
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('LinkedIn')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Facebook')");         
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Instagram')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Google+')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Twitter')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Skype')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Whatsapp')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Telegram')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Pinterest')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Tumblr')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('Slideshare')");
            Sql("INSERT INTO [Sist].[TiposRedesSociales] VALUES ('YouTube')");
        }
        
        public override void Down()
        {
        }
    }
}
