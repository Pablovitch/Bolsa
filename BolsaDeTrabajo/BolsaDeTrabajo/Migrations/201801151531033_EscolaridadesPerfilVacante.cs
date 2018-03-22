namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class EscolaridadesPerfilVacante : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.Vacantes", "EstadoEstudioId", "Sist.EstadosEstudios");
            DropForeignKey("Sist.Vacantes", "GradoEstudioId", "Sist.GradosEstudios");
            DropIndex("Sist.Vacantes", new[] { "EstadoEstudioId" });
            DropIndex("Sist.Vacantes", new[] { "GradoEstudioId" });
            AddColumn("Sist.EscolaridadesPerfil", "EstadoEstudioId", c => c.Int(nullable: false));
            CreateIndex("Sist.EscolaridadesPerfil", "EstadoEstudioId");
            AddForeignKey("Sist.EscolaridadesPerfil", "EstadoEstudioId", "Sist.EstadosEstudios", "Id", cascadeDelete: true);
            DropColumn("Sist.Vacantes", "EstadoEstudioId");
            DropColumn("Sist.Vacantes", "GradoEstudioId");
        }
        
        public override void Down()
        {
            AddColumn("Sist.Vacantes", "GradoEstudioId", c => c.Int(nullable: false));
            AddColumn("Sist.Vacantes", "EstadoEstudioId", c => c.Int(nullable: false));
            DropForeignKey("Sist.EscolaridadesPerfil", "EstadoEstudioId", "Sist.EstadosEstudios");
            DropIndex("Sist.EscolaridadesPerfil", new[] { "EstadoEstudioId" });
            DropColumn("Sist.EscolaridadesPerfil", "EstadoEstudioId");
            CreateIndex("Sist.Vacantes", "GradoEstudioId");
            CreateIndex("Sist.Vacantes", "EstadoEstudioId");
            AddForeignKey("Sist.Vacantes", "GradoEstudioId", "Sist.GradosEstudios", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Vacantes", "EstadoEstudioId", "Sist.EstadosEstudios", "Id", cascadeDelete: true);
        }
    }
}
