namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DamfoYrelaciones : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "Sist.ProcesoPerfils", newName: "ProcesoPerfil");
            RenameTable(name: "Sist.PsicometriasClientes", newName: "PsicometriasCliente");
            RenameTable(name: "Sist.PsicometriasDamsas", newName: "PsicometriasDamsa");
            DropForeignKey("Sist.DAMFO_290", "DireccionId_Id", "Sist.Direcciones");
            DropIndex("Sist.DAMFO_290", new[] { "DireccionId_Id" });
            AddColumn("Sist.DAMFO_290", "GeneroId", c => c.Byte(nullable: false));
            AddColumn("Sist.DAMFO_290", "DiaCorteId", c => c.Byte(nullable: false));
            AddColumn("Sist.DAMFO_290", "DiaPagoId", c => c.Byte(nullable: false));
            AddColumn("Sist.DAMFO_290", "Especifique", c => c.String());
            AlterColumn("Sist.DAMFO_290", "NombrePerfil", c => c.String(maxLength: 100, unicode: false));
            AlterColumn("Sist.DAMFO_290", "EstadoCivilId", c => c.Byte(nullable: false));
            AlterColumn("Sist.DAMFO_290", "Experiencia", c => c.String(nullable: false, maxLength: 500, unicode: false));
            AlterColumn("Sist.DAMFO_290", "SueldoMinimo", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AlterColumn("Sist.DAMFO_290", "SueldoMaximo", c => c.Decimal(nullable: false, precision: 18, scale: 3));
            AlterColumn("Sist.ProcesoPerfil", "Proceso", c => c.String(nullable: false, maxLength: 100, unicode: false));
            AlterColumn("Sist.PsicometriasCliente", "Psicometria", c => c.String(maxLength: 50));
            AlterColumn("Sist.PsicometriasCliente", "Descripcion", c => c.String(maxLength: 200));
            CreateIndex("Sist.DAMFO_290", "ClienteId");
            CreateIndex("Sist.DAMFO_290", "TipoReclutamientoId");
            CreateIndex("Sist.DAMFO_290", "ClaseReclutamientoId");
            CreateIndex("Sist.DAMFO_290", "GeneroId");
            CreateIndex("Sist.DAMFO_290", "EstadoCivilId");
            CreateIndex("Sist.DAMFO_290", "NivelId");
            CreateIndex("Sist.DAMFO_290", "AreaId");
            CreateIndex("Sist.DAMFO_290", "DiaCorteId");
            CreateIndex("Sist.DAMFO_290", "TipoNominaId");
            CreateIndex("Sist.DAMFO_290", "DiaPagoId");
            CreateIndex("Sist.DAMFO_290", "PeriodoPagoId");
            CreateIndex("Sist.DAMFO_290", "ContratoInicialId");
            CreateIndex("Sist.DAMFO_290", "ContratoFinalId");
            AddForeignKey("Sist.DAMFO_290", "AreaId", "Sist.Areas", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "ClaseReclutamientoId", "Sist.ClasesReclutamientos", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "ClienteId", "Sist.Clientes", "Id");
            AddForeignKey("Sist.DAMFO_290", "ContratoFinalId", "Sist.TiposContratos", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "ContratoInicialId", "Sist.TiposContratos", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "DiaCorteId", "Sist.DiasSemana", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "DiaPagoId", "Sist.DiasSemana", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "EstadoCivilId", "Sist.EstadosCiviles", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "GeneroId", "Sist.Generos", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "NivelId", "Sist.EstadosEstudios", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "PeriodoPagoId", "Sist.PeriodosPagos", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "TipoNominaId", "Sist.TiposNominas", "Id", cascadeDelete: false);
            AddForeignKey("Sist.DAMFO_290", "TipoReclutamientoId", "Sist.TiposReclutamientos", "Id", cascadeDelete: false);
            DropColumn("Sist.DAMFO_290", "SexoId");
            DropColumn("Sist.DAMFO_290", "MyProperty");
            DropColumn("Sist.DAMFO_290", "DiasCorteId");
            DropColumn("Sist.DAMFO_290", "DiasPagoId");
            DropColumn("Sist.DAMFO_290", "DireccionId_Id");
        }
        
        public override void Down()
        {
            AddColumn("Sist.DAMFO_290", "DireccionId_Id", c => c.Guid());
            AddColumn("Sist.DAMFO_290", "DiasPagoId", c => c.Int(nullable: false));
            AddColumn("Sist.DAMFO_290", "DiasCorteId", c => c.Int(nullable: false));
            AddColumn("Sist.DAMFO_290", "MyProperty", c => c.Int(nullable: false));
            AddColumn("Sist.DAMFO_290", "SexoId", c => c.Int(nullable: false));
            DropForeignKey("Sist.DAMFO_290", "TipoReclutamientoId", "Sist.TiposReclutamientos");
            DropForeignKey("Sist.DAMFO_290", "TipoNominaId", "Sist.TiposNominas");
            DropForeignKey("Sist.DAMFO_290", "PeriodoPagoId", "Sist.PeriodosPagos");
            DropForeignKey("Sist.DAMFO_290", "NivelId", "Sist.EstadosEstudios");
            DropForeignKey("Sist.DAMFO_290", "GeneroId", "Sist.Generos");
            DropForeignKey("Sist.DAMFO_290", "EstadoCivilId", "Sist.EstadosCiviles");
            DropForeignKey("Sist.DAMFO_290", "DiaPagoId", "Sist.DiasSemana");
            DropForeignKey("Sist.DAMFO_290", "DiaCorteId", "Sist.DiasSemana");
            DropForeignKey("Sist.DAMFO_290", "ContratoInicialId", "Sist.TiposContratos");
            DropForeignKey("Sist.DAMFO_290", "ContratoFinalId", "Sist.TiposContratos");
            DropForeignKey("Sist.DAMFO_290", "ClienteId", "Sist.Clientes");
            DropForeignKey("Sist.DAMFO_290", "ClaseReclutamientoId", "Sist.ClasesReclutamientos");
            DropForeignKey("Sist.DAMFO_290", "AreaId", "Sist.Areas");
            DropIndex("Sist.DAMFO_290", new[] { "ContratoFinalId" });
            DropIndex("Sist.DAMFO_290", new[] { "ContratoInicialId" });
            DropIndex("Sist.DAMFO_290", new[] { "PeriodoPagoId" });
            DropIndex("Sist.DAMFO_290", new[] { "DiaPagoId" });
            DropIndex("Sist.DAMFO_290", new[] { "TipoNominaId" });
            DropIndex("Sist.DAMFO_290", new[] { "DiaCorteId" });
            DropIndex("Sist.DAMFO_290", new[] { "AreaId" });
            DropIndex("Sist.DAMFO_290", new[] { "NivelId" });
            DropIndex("Sist.DAMFO_290", new[] { "EstadoCivilId" });
            DropIndex("Sist.DAMFO_290", new[] { "GeneroId" });
            DropIndex("Sist.DAMFO_290", new[] { "ClaseReclutamientoId" });
            DropIndex("Sist.DAMFO_290", new[] { "TipoReclutamientoId" });
            DropIndex("Sist.DAMFO_290", new[] { "ClienteId" });
            AlterColumn("Sist.PsicometriasCliente", "Descripcion", c => c.String());
            AlterColumn("Sist.PsicometriasCliente", "Psicometria", c => c.String());
            AlterColumn("Sist.ProcesoPerfil", "Proceso", c => c.String());
            AlterColumn("Sist.DAMFO_290", "SueldoMaximo", c => c.Single(nullable: false));
            AlterColumn("Sist.DAMFO_290", "SueldoMinimo", c => c.Single(nullable: false));
            AlterColumn("Sist.DAMFO_290", "Experiencia", c => c.Int(nullable: false));
            AlterColumn("Sist.DAMFO_290", "EstadoCivilId", c => c.Int(nullable: false));
            AlterColumn("Sist.DAMFO_290", "NombrePerfil", c => c.String());
            DropColumn("Sist.DAMFO_290", "Especifique");
            DropColumn("Sist.DAMFO_290", "DiaPagoId");
            DropColumn("Sist.DAMFO_290", "DiaCorteId");
            DropColumn("Sist.DAMFO_290", "GeneroId");
            CreateIndex("Sist.DAMFO_290", "DireccionId_Id");
            AddForeignKey("Sist.DAMFO_290", "DireccionId_Id", "Sist.Direcciones", "Id");
            RenameTable(name: "Sist.PsicometriasDamsa", newName: "PsicometriasDamsas");
            RenameTable(name: "Sist.PsicometriasCliente", newName: "PsicometriasClientes");
            RenameTable(name: "Sist.ProcesoPerfil", newName: "ProcesoPerfils");
        }
    }
}
