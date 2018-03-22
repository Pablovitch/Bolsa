namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class aptitudesEscolaridadPerfil : DbMigration
    {
        public override void Up()
        {
            AddColumn("Sist.AptitudesPerfil", "AptitudId", c => c.Int(nullable: false));
            AddColumn("Sist.EscolaridadesPerfil", "EscolaridadId", c => c.Int(nullable: false));
            CreateIndex("Sist.AptitudesPerfil", "AptitudId");
            CreateIndex("Sist.EscolaridadesPerfil", "EscolaridadId");
            AddForeignKey("Sist.AptitudesPerfil", "AptitudId", "Sist.Aptitudes", "Id", cascadeDelete: false);
            AddForeignKey("Sist.EscolaridadesPerfil", "EscolaridadId", "Sist.GradosEstudios", "Id", cascadeDelete: false);
            DropColumn("Sist.AptitudesPerfil", "Aptitudes");
            DropColumn("Sist.EscolaridadesPerfil", "Escolaridad");
        }
        
        public override void Down()
        {
            AddColumn("Sist.EscolaridadesPerfil", "Escolaridad", c => c.String(nullable: false, maxLength: 100, unicode: false));
            AddColumn("Sist.AptitudesPerfil", "Aptitudes", c => c.String(nullable: false, maxLength: 50));
            DropForeignKey("Sist.EscolaridadesPerfil", "EscolaridadId", "Sist.GradosEstudios");
            DropForeignKey("Sist.AptitudesPerfil", "AptitudId", "Sist.Aptitudes");
            DropIndex("Sist.EscolaridadesPerfil", new[] { "EscolaridadId" });
            DropIndex("Sist.AptitudesPerfil", new[] { "AptitudId" });
            DropColumn("Sist.EscolaridadesPerfil", "EscolaridadId");
            DropColumn("Sist.AptitudesPerfil", "AptitudId");
        }
    }
}
