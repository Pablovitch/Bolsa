namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class HorasCurso : DbMigration
    {
        public override void Up()
        {
            AddColumn("Sist.Cursos", "Horas", c => c.Int(nullable:true));
        }
        
        public override void Down()
        {
            DropColumn("Sist.Cursos", "Horas");
        }
    }
}
