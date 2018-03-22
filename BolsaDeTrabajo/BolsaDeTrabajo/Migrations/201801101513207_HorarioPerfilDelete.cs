namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class HorarioPerfilDelete : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.HorariosPerfiles", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.Vacantes", "HorarioId", "Sist.HorariosPerfiles");
            DropIndex("Sist.HorariosPerfiles", new[] { "DAMFO290Id" });
            DropIndex("Sist.Vacantes", new[] { "HorarioId" });            
            //CreateIndex("Sist.BeneficiosPerfil", "DAMFO290Id");
            //CreateIndex("Sist.PrestacionesClientePerfil", "DAMFO290Id");
            //AddForeignKey("Sist.BeneficiosPerfil", "DAMFO290Id", "Sist.Vacantes", "Id");
            //AddForeignKey("Sist.PrestacionesClientePerfil", "DAMFO290Id", "Sist.Vacantes", "Id");
            DropColumn("Sist.Vacantes", "HorarioId");
            DropTable("Sist.HorariosPerfiles");
        }
        
        public override void Down()
        {
            CreateTable(
                "Sist.HorariosPerfiles",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Nombre = c.String(nullable: false, maxLength: 100),
                        deDia = c.String(nullable: false, maxLength: 15),
                        aDia = c.String(nullable: false, maxLength: 15),
                        deHora = c.String(nullable: false, maxLength: 15),
                        aHora = c.String(nullable: false, maxLength: 15),
                        numeroVacantes = c.Byte(nullable: false),
                        Especificaciones = c.String(nullable: false, maxLength: 500, unicode: false),
                        DAMFO290Id = c.Guid(nullable: false),
                        Activo = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("Sist.Vacantes", "HorarioId", c => c.Guid(nullable: false));
            DropForeignKey("Sist.PrestacionesClientePerfil", "Vacante_Id", "Sist.Vacantes");
            DropForeignKey("Sist.BeneficiosPerfil", "Vacante_Id", "Sist.Vacantes");
            DropIndex("Sist.PrestacionesClientePerfil", new[] { "Vacante_Id" });
            DropIndex("Sist.BeneficiosPerfil", new[] { "Vacante_Id" });
            DropColumn("Sist.PrestacionesClientePerfil", "Vacante_Id");
            DropColumn("Sist.BeneficiosPerfil", "Vacante_Id");
            CreateIndex("Sist.Vacantes", "HorarioId");
            CreateIndex("Sist.HorariosPerfiles", "DAMFO290Id");
            AddForeignKey("Sist.Vacantes", "HorarioId", "Sist.HorariosPerfiles", "Id", cascadeDelete: true);
            AddForeignKey("Sist.HorariosPerfiles", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
        }
    }
}
