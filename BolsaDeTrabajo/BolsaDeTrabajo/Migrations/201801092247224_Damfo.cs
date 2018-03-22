namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Damfo : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.ActividadesPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.AptitudesPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.DAMFO_290", "AreaId", "Sist.Areas");
            DropForeignKey("Sist.BeneficiosPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.DAMFO_290", "ClaseReclutamientoId", "Sist.ClasesReclutamientos");
            DropForeignKey("Sist.DAMFO_290", "ClienteId", "Sist.Clientes");
            DropForeignKey("Sist.CompetenciaAreaPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.CompetenciaCardinalPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.CompetenciaGerencialPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.DAMFO_290", "ContratoFinalId", "Sist.TiposContratos");
            DropForeignKey("Sist.DAMFO_290", "ContratoInicialId", "Sist.TiposContratos");
            DropForeignKey("Sist.DAMFO_290", "DiaCorteId", "Sist.DiasSemana");
            DropForeignKey("Sist.DAMFO_290", "DiaPagoId", "Sist.DiasSemana");
            DropForeignKey("Sist.DocumentosClientes", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.EscolaridadesPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.DAMFO_290", "EstadoCivilId", "Sist.EstadosCiviles");
            DropForeignKey("Sist.DAMFO_290", "GeneroId", "Sist.Generos");
            DropForeignKey("Sist.HorariosPerfiles", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.DAMFO_290", "NivelId", "Sist.EstadosEstudios");
            DropForeignKey("Sist.ObservacionesPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.DAMFO_290", "PeriodoPagoId", "Sist.PeriodosPagos");
            DropForeignKey("Sist.PrestacionesClientePerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.ProcesoPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.PsicometriasCliente", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.PsicometriasDamsa", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.DAMFO_290", "TipoNominaId", "Sist.TiposNominas");
            DropForeignKey("Sist.DAMFO_290", "TipoReclutamientoId", "Sist.TiposReclutamientos");
            DropForeignKey("Sist.ContactoPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.RutasPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.TelefonoPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropIndex("Sist.ActividadesPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.DAMFO_290", new[] { "ClienteId" });
            DropIndex("Sist.DAMFO_290", new[] { "TipoReclutamientoId" });
            DropIndex("Sist.DAMFO_290", new[] { "ClaseReclutamientoId" });
            DropIndex("Sist.DAMFO_290", new[] { "GeneroId" });
            DropIndex("Sist.DAMFO_290", new[] { "EstadoCivilId" });
            DropIndex("Sist.DAMFO_290", new[] { "NivelId" });
            DropIndex("Sist.DAMFO_290", new[] { "AreaId" });
            DropIndex("Sist.DAMFO_290", new[] { "DiaCorteId" });
            DropIndex("Sist.DAMFO_290", new[] { "TipoNominaId" });
            DropIndex("Sist.DAMFO_290", new[] { "DiaPagoId" });
            DropIndex("Sist.DAMFO_290", new[] { "PeriodoPagoId" });
            DropIndex("Sist.DAMFO_290", new[] { "ContratoInicialId" });
            DropIndex("Sist.DAMFO_290", new[] { "ContratoFinalId" });
            DropIndex("Sist.AptitudesPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.BeneficiosPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.CompetenciaAreaPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.CompetenciaCardinalPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.CompetenciaGerencialPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.DocumentosClientes", new[] { "DAMFO290Id" });
            DropIndex("Sist.EscolaridadesPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.HorariosPerfiles", new[] { "DAMFO290Id" });
            DropIndex("Sist.ObservacionesPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.PrestacionesClientePerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.ProcesoPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.PsicometriasCliente", new[] { "DAMFO290Id" });
            DropIndex("Sist.PsicometriasDamsa", new[] { "DAMFO290Id" });
            DropIndex("Sist.ContactoPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.RutasPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.TelefonoPerfil", new[] { "DAMFO290Id" });
            DropTable("Sist.DAMFO_290");
            //DropTable("Sist.DocumentosClientes");
        }
        
        public override void Down()
        {
            CreateTable(
                "Sist.DocumentosClientes",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Documento = c.String(),
                        DAMFO290Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.DAMFO_290",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        ClienteId = c.Guid(nullable: false),
                        TipoReclutamientoId = c.Int(nullable: false),
                        ClaseReclutamientoId = c.Int(nullable: false),
                        NombrePerfil = c.String(maxLength: 100, unicode: false),
                        GeneroId = c.Byte(nullable: false),
                        EdadMinima = c.Int(nullable: false),
                        EdadMaxima = c.Int(nullable: false),
                        EstadoCivilId = c.Byte(nullable: false),
                        NivelId = c.Int(nullable: false),
                        AreaId = c.Int(nullable: false),
                        Experiencia = c.String(nullable: false, maxLength: 500, unicode: false),
                        SueldoMinimo = c.Decimal(nullable: false, precision: 18, scale: 2),
                        SueldoMaximo = c.Decimal(nullable: false, precision: 18, scale: 3),
                        DiaCorteId = c.Byte(nullable: false),
                        TipoNominaId = c.Int(nullable: false),
                        DiaPagoId = c.Byte(nullable: false),
                        PeriodoPagoId = c.Int(nullable: false),
                        Especifique = c.String(),
                        ContratoInicialId = c.Int(nullable: false),
                        ContratoFinalId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("Sist.TelefonoPerfil", "DAMFO290Id");
            CreateIndex("Sist.RutasPerfil", "DAMFO290Id");
            CreateIndex("Sist.ContactoPerfil", "DAMFO290Id");
            CreateIndex("Sist.PsicometriasDamsa", "DAMFO290Id");
            CreateIndex("Sist.PsicometriasCliente", "DAMFO290Id");
            CreateIndex("Sist.ProcesoPerfil", "DAMFO290Id");
            CreateIndex("Sist.PrestacionesClientePerfil", "DAMFO290Id");
            CreateIndex("Sist.ObservacionesPerfil", "DAMFO290Id");
            CreateIndex("Sist.HorariosPerfiles", "DAMFO290Id");
            CreateIndex("Sist.EscolaridadesPerfil", "DAMFO290Id");
            CreateIndex("Sist.DocumentosClientes", "DAMFO290Id");
            CreateIndex("Sist.CompetenciaGerencialPerfil", "DAMFO290Id");
            CreateIndex("Sist.CompetenciaCardinalPerfil", "DAMFO290Id");
            CreateIndex("Sist.CompetenciaAreaPerfil", "DAMFO290Id");
            CreateIndex("Sist.BeneficiosPerfil", "DAMFO290Id");
            CreateIndex("Sist.AptitudesPerfil", "DAMFO290Id");
            CreateIndex("Sist.DAMFO_290", "ContratoFinalId");
            CreateIndex("Sist.DAMFO_290", "ContratoInicialId");
            CreateIndex("Sist.DAMFO_290", "PeriodoPagoId");
            CreateIndex("Sist.DAMFO_290", "DiaPagoId");
            CreateIndex("Sist.DAMFO_290", "TipoNominaId");
            CreateIndex("Sist.DAMFO_290", "DiaCorteId");
            CreateIndex("Sist.DAMFO_290", "AreaId");
            CreateIndex("Sist.DAMFO_290", "NivelId");
            CreateIndex("Sist.DAMFO_290", "EstadoCivilId");
            CreateIndex("Sist.DAMFO_290", "GeneroId");
            CreateIndex("Sist.DAMFO_290", "ClaseReclutamientoId");
            CreateIndex("Sist.DAMFO_290", "TipoReclutamientoId");
            CreateIndex("Sist.DAMFO_290", "ClienteId");
            CreateIndex("Sist.ActividadesPerfil", "DAMFO290Id");
            AddForeignKey("Sist.TelefonoPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.RutasPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.ContactoPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "TipoReclutamientoId", "Sist.TiposReclutamientos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "TipoNominaId", "Sist.TiposNominas", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PsicometriasDamsa", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PsicometriasCliente", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.ProcesoPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PrestacionesClientePerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "PeriodoPagoId", "Sist.PeriodosPagos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.ObservacionesPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "NivelId", "Sist.EstadosEstudios", "Id", cascadeDelete: true);
            AddForeignKey("Sist.HorariosPerfiles", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "GeneroId", "Sist.Generos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "EstadoCivilId", "Sist.EstadosCiviles", "Id", cascadeDelete: true);
            AddForeignKey("Sist.EscolaridadesPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DocumentosClientes", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "DiaPagoId", "Sist.DiasSemana", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "DiaCorteId", "Sist.DiasSemana", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "ContratoInicialId", "Sist.TiposContratos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "ContratoFinalId", "Sist.TiposContratos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.CompetenciaGerencialPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.CompetenciaCardinalPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.CompetenciaAreaPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "ClienteId", "Sist.Clientes", "Id");
            AddForeignKey("Sist.DAMFO_290", "ClaseReclutamientoId", "Sist.ClasesReclutamientos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.BeneficiosPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "AreaId", "Sist.Areas", "Id", cascadeDelete: true);
            AddForeignKey("Sist.AptitudesPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.ActividadesPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
        }
    }
}
