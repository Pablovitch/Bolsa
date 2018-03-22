namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Postulaciones : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Sist.Postulaciones",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity:true),
                        CandidatoId = c.Guid(nullable: false),
                        VacanteId = c.Guid(nullable: false),
                        StatusId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Candidatos", t => t.CandidatoId)
                .ForeignKey("Sist.StatusPostulacions", t => t.StatusId, cascadeDelete: false)
                .ForeignKey("Sist.Vacantes", t => t.VacanteId, cascadeDelete: false)
                .Index(t => t.CandidatoId)
                .Index(t => t.VacanteId)
                .Index(t => t.StatusId);
            
            CreateTable(
                "Sist.StatusPostulacions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Status = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.Vacantes",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity:true),
                        VBtra = c.String(),
                        EscolaridadId = c.Int(nullable: false),
                        Experiencia = c.String(),
                        ZonaId = c.Int(nullable: false),
                        CategoriaId = c.Int(nullable: false),
                        ClienteId = c.Guid(nullable: false),
                        FechaCreacion = c.DateTime(nullable: false),
                        NivelId = c.Byte(nullable: false),
                        HorarioId = c.Guid(nullable: false),
                        Actividades = c.String(),
                        TipoContratoId = c.Int(nullable: false),
                        DAMFO290Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Areas", t => t.CategoriaId, cascadeDelete: true)
                .ForeignKey("Sist.Clientes", t => t.ClienteId)
                .ForeignKey("Sist.TiposContratos", t => t.TipoContratoId, cascadeDelete: true)
                .ForeignKey("Sist.EstadosEstudios", t => t.EscolaridadId, cascadeDelete: true)
                .ForeignKey("Sist.HorariosPerfiles", t => t.HorarioId, cascadeDelete: true)
                .ForeignKey("Sist.Niveles", t => t.NivelId, cascadeDelete: true)
                .ForeignKey("Sist.TiposDirecciones", t => t.ZonaId, cascadeDelete: true)
                .Index(t => t.EscolaridadId)
                .Index(t => t.ZonaId)
                .Index(t => t.CategoriaId)
                .Index(t => t.ClienteId)
                .Index(t => t.NivelId)
                .Index(t => t.HorarioId)
                .Index(t => t.TipoContratoId);  
            AddForeignKey("Sist.AptitudesPerfil", "DAMFO290Id", "Sist.Vacantes", "Id");
            AddForeignKey("Sist.BeneficiosPerfil", "DAMFO290Id", "Sist.Vacantes", "Id");
            AddForeignKey("Sist.PrestacionesClientePerfil", "DAMFO290Id", "Sist.Vacantes", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("Sist.Postulaciones", "VacanteId", "Sist.Vacantes");
            DropForeignKey("Sist.Vacantes", "ZonaId", "Sist.TiposDirecciones");
            DropForeignKey("Sist.PrestacionesClientePerfil", "Vacante_Id", "Sist.Vacantes");
            DropForeignKey("Sist.Vacantes", "NivelId", "Sist.Niveles");
            DropForeignKey("Sist.Vacantes", "HorarioId", "Sist.HorariosPerfiles");
            DropForeignKey("Sist.Vacantes", "EscolaridadId", "Sist.EstadosEstudios");
            DropForeignKey("Sist.Vacantes", "TipoContratoId", "Sist.TiposContratos");
            DropForeignKey("Sist.Vacantes", "ClienteId", "Sist.Clientes");
            DropForeignKey("Sist.Vacantes", "CategoriaId", "Sist.Areas");
            DropForeignKey("Sist.BeneficiosPerfil", "Vacante_Id", "Sist.Vacantes");
            DropForeignKey("Sist.AptitudesPerfil", "Vacante_Id", "Sist.Vacantes");
            DropForeignKey("Sist.Postulaciones", "StatusId", "Sist.StatusPostulacions");
            DropForeignKey("Sist.Postulaciones", "CandidatoId", "Sist.Candidatos");
            DropIndex("Sist.Vacantes", new[] { "TipoContratoId" });
            DropIndex("Sist.Vacantes", new[] { "HorarioId" });
            DropIndex("Sist.Vacantes", new[] { "NivelId" });
            DropIndex("Sist.Vacantes", new[] { "ClienteId" });
            DropIndex("Sist.Vacantes", new[] { "CategoriaId" });
            DropIndex("Sist.Vacantes", new[] { "ZonaId" });
            DropIndex("Sist.Vacantes", new[] { "EscolaridadId" });
            DropIndex("Sist.Postulaciones", new[] { "StatusId" });
            DropIndex("Sist.Postulaciones", new[] { "VacanteId" });
            DropIndex("Sist.Postulaciones", new[] { "CandidatoId" });
            DropIndex("Sist.PrestacionesClientePerfil", new[] { "Vacante_Id" });
            DropIndex("Sist.AptitudesPerfil", new[] { "Vacante_Id" });
            DropIndex("Sist.BeneficiosPerfil", new[] { "Vacante_Id" });
            DropColumn("Sist.PrestacionesClientePerfil", "Vacante_Id");
            DropColumn("Sist.AptitudesPerfil", "Vacante_Id");
            DropColumn("Sist.BeneficiosPerfil", "Vacante_Id");
            DropTable("Sist.Vacantes");
            DropTable("Sist.StatusPostulacions");
            DropTable("Sist.Postulaciones");
        }
    }
}
