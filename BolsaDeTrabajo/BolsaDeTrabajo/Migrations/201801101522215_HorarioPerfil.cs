namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class HorarioPerfil : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Sist.HorariosPerfiles",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity:true),
                        Nombre = c.String(nullable: false, maxLength: 100),
                        deDiaId = c.Byte(nullable: false),
                        aDiaId = c.Byte(nullable: false),
                        deHora = c.String(nullable: false, maxLength: 15),
                        aHora = c.String(nullable: false, maxLength: 15),
                        numeroVacantes = c.Byte(nullable: false),
                        Especificaciones = c.String(nullable: false, maxLength: 500, unicode: false),
                        DAMFO290Id = c.Guid(nullable: false),
                        Activo = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DiasSemana", t => t.aDiaId, cascadeDelete: false)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .ForeignKey("Sist.DiasSemana", t => t.deDiaId, cascadeDelete: false)
                .Index(t => t.deDiaId)
                .Index(t => t.aDiaId)
                .Index(t => t.DAMFO290Id);
            
            AddColumn("Sist.Vacantes", "HorarioId", c => c.Guid(nullable: false));
            CreateIndex("Sist.Vacantes", "HorarioId");
            AddForeignKey("Sist.Vacantes", "HorarioId", "Sist.HorariosPerfiles", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.Vacantes", "HorarioId", "Sist.HorariosPerfiles");
            DropForeignKey("Sist.HorariosPerfiles", "deDiaId", "Sist.DiasSemana");
            DropForeignKey("Sist.HorariosPerfiles", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.HorariosPerfiles", "aDiaId", "Sist.DiasSemana");
            DropIndex("Sist.Vacantes", new[] { "HorarioId" });
            DropIndex("Sist.HorariosPerfiles", new[] { "DAMFO290Id" });
            DropIndex("Sist.HorariosPerfiles", new[] { "aDiaId" });
            DropIndex("Sist.HorariosPerfiles", new[] { "deDiaId" });
            DropColumn("Sist.Vacantes", "HorarioId");
            DropTable("Sist.HorariosPerfiles");
        }
    }
}
