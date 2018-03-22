namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class tst : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("Recl.ProcesoPerfil");
            AlterColumn("Recl.ProcesoPerfil", "Id", c => c.Guid(nullable: false, identity: true));
            AddPrimaryKey("Recl.ProcesoPerfil", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("Recl.ProcesoPerfil");
            AlterColumn("Recl.ProcesoPerfil", "Id", c => c.Guid(nullable: false));
            AddPrimaryKey("Recl.ProcesoPerfil", "Id");
        }
    }
}
