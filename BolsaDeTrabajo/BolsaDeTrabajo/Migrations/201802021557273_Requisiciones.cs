namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Requisiciones : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("Sist.Vacantes", "CategoriaId", "Sist.Areas");
            DropForeignKey("Sist.Vacantes", "ClienteId", "Sist.Clientes");
            DropForeignKey("Sist.Vacantes", "ContratoFinalId", "Sist.TiposContratos");
            DropForeignKey("Sist.Vacantes", "ContratoInicialId", "Sist.TiposContratos");
            DropForeignKey("Sist.Vacantes", "DireccionId", "Sist.Direcciones");
            DropForeignKey("Sist.Vacantes", "HorarioId", "Sist.HorariosPerfiles");

            DropIndex("Sist.Vacantes", new[] { "DireccionId" });
            DropIndex("Sist.Vacantes", new[] { "CategoriaId" });
            DropIndex("Sist.Vacantes", new[] { "ClienteId" });
            DropIndex("Sist.Vacantes", new[] { "HorarioId" });
            DropIndex("Sist.Vacantes", new[] { "ContratoInicialId" });
            DropIndex("Sist.Vacantes", new[] { "ContratoFinalId" });

            DropForeignKey("Sist.Postulaciones", "VacanteId", "Sist.Vacantes");
            DropIndex("Sist.Postulaciones", new[] { "VacanteId" });
            DropColumn("Sist.Postulaciones", "VacanteId");
            DropTable("Sist.Vacantes");

            DropForeignKey("Sist.RutasPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropIndex("Sist.RutasPerfil", new[] { "DAMFO290Id" });

            MoveTable(name: "Sist.AcercaDeMi", newSchema: "BTra");
            MoveTable(name: "Sist.AreasExperiencia", newSchema: "BTra");
            MoveTable(name: "Sist.AreasInteres", newSchema: "BTra");
            MoveTable(name: "Sist.PerfilCandidato", newSchema: "BTra");
            MoveTable(name: "Sist.Candidatos", newSchema: "BTra");
            MoveTable(name: "Sist.Clientes", newSchema: "Vtas");
            MoveTable(name: "Sist.Contactos", newSchema: "Vtas");
            MoveTable(name: "Sist.Referenciados", newSchema: "Vtas");
            MoveTable(name: "Sist.ActividadEmpresas", newSchema: "Vtas");
            MoveTable(name: "Sist.Agencias", newSchema: "Vtas");
            MoveTable(name: "Sist.TamanosEmpresas", newSchema: "Vtas");
            MoveTable(name: "Sist.TiposBases", newSchema: "Vtas");
            MoveTable(name: "Sist.TiposEmpresas", newSchema: "Vtas");
            MoveTable(name: "Sist.TiposDiscapacidades", newSchema: "BTra");
            MoveTable(name: "Sist.TiposLicencias", newSchema: "BTra");
            MoveTable(name: "Sist.Certificaciones", newSchema: "BTra");
            MoveTable(name: "Sist.ConocimientosHabilidades", newSchema: "BTra");
            MoveTable(name: "Sist.InstitucionesEducativas", newSchema: "BTra");
            MoveTable(name: "Sist.Cursos", newSchema: "BTra");
            MoveTable(name: "Sist.ExperienciasProfesionales", newSchema: "BTra");
            MoveTable(name: "Sist.Areas", newSchema: "Recl");
            MoveTable(name: "Sist.Formaciones", newSchema: "BTra");
            MoveTable(name: "Sist.Carreras", newSchema: "BTra");
            MoveTable(name: "Sist.DocumentosValidadores", newSchema: "BTra");
            MoveTable(name: "Sist.EstadosEstudios", newSchema: "Recl");
            MoveTable(name: "Sist.PerfilExperiencia", newSchema: "BTra");
            MoveTable(name: "Sist.ActividadesPerfil", newSchema: "Recl");
            MoveTable(name: "Sist.DAMFO_290", newSchema: "Recl");
            MoveTable(name: "Sist.AptitudesPerfil", newSchema: "Recl");
            MoveTable(name: "Sist.Aptitudes", newSchema: "Recl");
            MoveTable(name: "Sist.ClasesReclutamientos", newSchema: "Recl");
            MoveTable(name: "Sist.TiposReclutamientos", newSchema: "Recl");
            MoveTable(name: "Sist.BeneficiosPerfil", newSchema: "Recl");
            MoveTable(name: "Sist.TiposBeneficios", newSchema: "Recl");
            MoveTable(name: "Sist.CompetenciaAreaPerfil", newSchema: "Recl");
            MoveTable(name: "Sist.CompetenciaCardinalPerfil", newSchema: "Recl");
            MoveTable(name: "Sist.CompetenciaGerencialPerfil", newSchema: "Recl");
            MoveTable(name: "Sist.TiposContratos", newSchema: "Recl");
            MoveTable(name: "Sist.DiasSemana", newSchema: "Recl");
            MoveTable(name: "Sist.DocumentosClientes", newSchema: "Recl");
            MoveTable(name: "Sist.EscolaridadesPerfil", newSchema: "Recl");
            MoveTable(name: "Sist.HorariosPerfiles", newSchema: "Recl");
            MoveTable(name: "Sist.ObservacionesPerfil", newSchema: "Recl");
            MoveTable(name: "Sist.PeriodosPagos", newSchema: "Recl");
            MoveTable(name: "Sist.PrestacionesClientePerfil", newSchema: "Recl");
            MoveTable(name: "Sist.ProcesoPerfil", newSchema: "Recl");
            MoveTable(name: "Sist.PsicometriasCliente", newSchema: "Recl");
            MoveTable(name: "Sist.PsicometriasDamsa", newSchema: "Recl");
            MoveTable(name: "Sist.TiposPsicometrias", newSchema: "Recl");
            MoveTable(name: "Sist.TiposNominas", newSchema: "Recl");
            MoveTable(name: "Sist.CompetenciasAreas", newSchema: "Recl");
            MoveTable(name: "Sist.CompetenciasCardinales", newSchema: "Recl");
            MoveTable(name: "Sist.CompetenciasGerenciales", newSchema: "Recl");
            MoveTable(name: "Sist.DiasObligatorios", newSchema: "Recl");
            MoveTable(name: "Sist.DocumentosDamsa", newSchema: "Recl");
            MoveTable(name: "Sist.FormasContacto", newSchema: "BTra");
            MoveTable(name: "Sist.FormulariosIniciales", newSchema: "BTra");
            MoveTable(name: "Sist.Postulaciones", newSchema: "BTra");
            MoveTable(name: "Sist.StatusPostulaciones", newSchema: "BTra");
            MoveTable(name: "Sist.PrestacionesLey", newSchema: "Recl");
            MoveTable(name: "Sist.RedesSociales", newSchema: "Recl");
            MoveTable(name: "Sist.TiposRedesSociales", newSchema: "BTra");
            MoveTable(name: "Sist.RutasPerfil", newSchema: "Recl");

          

            DropForeignKey("Sist.PerfilReclutamientoes", "AptitudId", "Sist.Aptitudes");
            DropForeignKey("Sist.PerfilReclutamientoes", "ClaseReclutamientoId", "Sist.ClasesReclutamientos");
            DropForeignKey("Sist.PerfilReclutamientoes", "ClienteId", "Sist.Clientes");
            DropForeignKey("Sist.PerfilReclutamientoes", "EstadoCivilId", "Sist.EstadosCiviles");
            DropForeignKey("Sist.PerfilReclutamientoes", "EstadoEstudioId", "Sist.EstadosEstudios");
            DropForeignKey("Sist.PerfilReclutamientoes", "GeneroId", "Sist.Generos");
            DropForeignKey("Sist.PerfilReclutamientoes", "TipoReclutamientoId", "Sist.TiposReclutamientos");
            DropForeignKey("Sist.DAMFO_290", "NivelId", "Sist.EstadosEstudios");
            DropForeignKey("Sist.CandidatoConocimientoInformatico", "ConocimientoInformaticoId", "Sist.ConocimientosInformaticos");
            DropForeignKey("Sist.CandidatoConocimientoInformatico", "PorcentageId", "Sist.Porcentages");
            DropForeignKey("Sist.ContactoPerfil", "ContactoId", "Sist.Contactos");
            DropForeignKey("Sist.ContactoPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.PerfilesProfesionales", "AreaId", "Sist.Areas");
            DropForeignKey("Sist.PerfilesProfesionales", "CargoId", "Sist.Cargos");
          
           
            
            DropForeignKey("Sist.TelefonoPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.TelefonoPerfil", "telefonoId", "Sist.Telefonos");
            DropForeignKey("Sist.Certificaciones", "MonthInicioId", "Sist.Months");
            DropForeignKey("Sist.Certificaciones", "MonthTerminoId", "Sist.Months");
            DropForeignKey("Sist.Certificaciones", "YearInicioId", "Sist.Years");
            DropForeignKey("Sist.Certificaciones", "YearTerminoId", "Sist.Years");
            DropForeignKey("Sist.Formaciones", "DocumentoValidadorId", "Sist.DocumentosValidadores");
            DropForeignKey("Sist.Formaciones", "MonthInicioId", "Sist.Months");
            DropForeignKey("Sist.Formaciones", "MonthTerminoId", "Sist.Months");
            DropForeignKey("Sist.Formaciones", "YearInicioId", "Sist.Years");
            DropForeignKey("Sist.Formaciones", "YearTerminoId", "Sist.Years");
            DropForeignKey("Sist.RedesSociales", "PersonaId", "Sist.Personas");
            DropIndex("BTra.Certificaciones", new[] { "YearInicioId" });
            DropIndex("BTra.Certificaciones", new[] { "MonthInicioId" });
            DropIndex("BTra.Certificaciones", new[] { "YearTerminoId" });
            DropIndex("BTra.Certificaciones", new[] { "MonthTerminoId" });
            DropIndex("BTra.Formaciones", new[] { "DocumentoValidadorId" });
            DropIndex("BTra.Formaciones", new[] { "YearInicioId" });
            DropIndex("BTra.Formaciones", new[] { "MonthInicioId" });
            DropIndex("BTra.Formaciones", new[] { "YearTerminoId" });
            DropIndex("BTra.Formaciones", new[] { "MonthTerminoId" });
            DropIndex("Recl.DAMFO_290", new[] { "NivelId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "ClienteId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "TipoReclutamientoId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "ClaseReclutamientoId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "GeneroId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "EstadoCivilId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "EstadoEstudioId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "AptitudId" });
            DropIndex("Sist.CandidatoConocimientoInformatico", new[] { "ConocimientoInformaticoId" });
            DropIndex("Sist.CandidatoConocimientoInformatico", new[] { "PorcentageId" });
            DropIndex("Sist.ContactoPerfil", new[] { "ContactoId" });
            DropIndex("Sist.ContactoPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.PerfilesProfesionales", new[] { "CargoId" });
            DropIndex("Sist.PerfilesProfesionales", new[] { "AreaId" });
           
           
            DropIndex("Recl.RedesSociales", new[] { "PersonaId" });
           
            DropIndex("Sist.TelefonoPerfil", new[] { "telefonoId" });
            DropIndex("Sist.TelefonoPerfil", new[] { "DAMFO290Id" });
            CreateTable(
                "Sist.Roles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Rol = c.String(nullable: false, maxLength: 20),
                        ModuloId = c.Int(nullable: false),
                        Create = c.Boolean(),
                        Read = c.Boolean(),
                        Update = c.Boolean(),
                        Delete = c.Boolean(),
                        Activo = c.Boolean(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Modulos", t => t.ModuloId, cascadeDelete: true)
                .Index(t => t.ModuloId);
            
            CreateTable(
                "Sist.Modulos",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nombre = c.String(nullable: false, maxLength: 50),
                        Accion = c.String(),
                        Icono = c.String(),
                        Orden = c.Int(),
                        IdPadre = c.Int(),
                        Activo = c.Boolean(),
                        Ambito = c.String(maxLength: 30),
                        Clave = c.String(nullable: false, maxLength: 5, fixedLength: true),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.TiposUsuarios",
                c => new
                    {
                        Id = c.Byte(nullable: false, identity: true),
                        Tipo = c.String(nullable: false, maxLength: 30),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Vtas.ActividadesRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Actividades = c.String(nullable: false, maxLength: 200),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.Requisiciones",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        ClienteId = c.Guid(nullable: false),
                        TipoReclutamientoId = c.Int(nullable: false),
                        ClaseReclutamientoId = c.Int(nullable: false),
                        VBtra = c.String(maxLength: 100),
                        GeneroId = c.Byte(nullable: false),
                        EdadMinima = c.Int(nullable: false),
                        EdadMaxima = c.Int(nullable: false),
                        EstadoCivilId = c.Byte(nullable: false),
                        AreaId = c.Int(nullable: false),
                        Experiencia = c.String(nullable: false, maxLength: 500),
                        SueldoMinimo = c.Decimal(nullable: false, precision: 18, scale: 2),
                        SueldoMaximo = c.Decimal(nullable: false, precision: 18, scale: 3),
                        DiaCorteId = c.Byte(nullable: false),
                        TipoNominaId = c.Int(nullable: false),
                        DiaPagoId = c.Byte(nullable: false),
                        PeriodoPagoId = c.Int(nullable: false),
                        Especifique = c.String(),
                        ContratoInicialId = c.Int(nullable: false),
                        ContratoFinalId = c.Int(nullable: false),
                        FechaCreacion = c.DateTime(nullable: false),
                        FechaAprobacion = c.DateTime(nullable: false),
                        FechaCumplimiento = c.DateTime(nullable: false),
                        FechaModificacion = c.DateTime(nullable: false),
                        PropietarioId = c.Guid(nullable: false),
                        AprobadorId = c.Guid(nullable: false),
                        UsuarioMod = c.Guid(nullable: false),
                        PrioridadId = c.Int(nullable: false),
                        Aprobada = c.Boolean(),
                        Confidencial = c.Boolean(),
                        Asignada = c.Boolean(),
                        EstatusId = c.Int(nullable: false),
                        DAMFO290Id = c.Guid(nullable: false),
                        DireccionId = c.Guid(nullable: false),
                        HorarioId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Usuarios", t => t.AprobadorId)
                .ForeignKey("Recl.Areas", t => t.AreaId, cascadeDelete: false)
                .ForeignKey("Recl.ClasesReclutamientos", t => t.ClaseReclutamientoId, cascadeDelete: false)
                .ForeignKey("Vtas.Clientes", t => t.ClienteId)
                .ForeignKey("Recl.TiposContratos", t => t.ContratoFinalId, cascadeDelete: false)
                .ForeignKey("Recl.TiposContratos", t => t.ContratoInicialId, cascadeDelete: false)
                .ForeignKey("Recl.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: true)
                .ForeignKey("Recl.DiasSemana", t => t.DiaCorteId, cascadeDelete: false)
                .ForeignKey("Recl.DiasSemana", t => t.DiaPagoId, cascadeDelete: false)
                .ForeignKey("Sist.Direcciones", t => t.DireccionId, cascadeDelete: false)
                .ForeignKey("Sist.EstadosCiviles", t => t.EstadoCivilId, cascadeDelete: false)
                .ForeignKey("Sist.Estatus", t => t.EstatusId, cascadeDelete: false)
                .ForeignKey("Sist.Generos", t => t.GeneroId, cascadeDelete: false)
                .ForeignKey("Vtas.HorariosRequi", t => t.HorarioId, cascadeDelete: false)
                .ForeignKey("Recl.PeriodosPagos", t => t.PeriodoPagoId, cascadeDelete: false)
                .ForeignKey("Sist.Prioridades", t => t.PrioridadId, cascadeDelete: false)
                .ForeignKey("Sist.Usuarios", t => t.PropietarioId)
                .ForeignKey("Recl.TiposNominas", t => t.TipoNominaId, cascadeDelete: false)
                .ForeignKey("Recl.TiposReclutamientos", t => t.TipoReclutamientoId, cascadeDelete: false)
                .Index(t => t.ClienteId)
                .Index(t => t.TipoReclutamientoId)
                .Index(t => t.ClaseReclutamientoId)
                .Index(t => t.GeneroId)
                .Index(t => t.EstadoCivilId)
                .Index(t => t.AreaId)
                .Index(t => t.DiaCorteId)
                .Index(t => t.TipoNominaId)
                .Index(t => t.DiaPagoId)
                .Index(t => t.PeriodoPagoId)
                .Index(t => t.ContratoInicialId)
                .Index(t => t.ContratoFinalId)
                .Index(t => t.PropietarioId)
                .Index(t => t.AprobadorId)
                .Index(t => t.PrioridadId)
                .Index(t => t.EstatusId)
                .Index(t => t.DAMFO290Id)
                .Index(t => t.DireccionId)
                .Index(t => t.HorarioId);
            
            CreateTable(
                "Vtas.AptitudesRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        AptitudId = c.Int(nullable: false),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Recl.Aptitudes", t => t.AptitudId, cascadeDelete: true)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.AptitudId)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.AsignacionesRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        RequisicionId = c.Guid(nullable: false),
                        GrpUsrId = c.Guid(nullable: false),
                        CRUD = c.String(maxLength: 5, fixedLength: true),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.GrpUsrId, cascadeDelete: true)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.RequisicionId)
                .Index(t => t.GrpUsrId);
            
            CreateTable(
                "Vtas.BeneficiosRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        TipoBeneficioId = c.Int(nullable: false),
                        Cantidad = c.Single(nullable: false),
                        Observaciones = c.String(maxLength: 500),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .ForeignKey("Recl.TiposBeneficios", t => t.TipoBeneficioId, cascadeDelete: true)
                .Index(t => t.TipoBeneficioId)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.CompetenciasAreasRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        CompetenciaId = c.Int(nullable: false),
                        Nivel = c.String(nullable: false, maxLength: 10),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Recl.CompetenciasAreas", t => t.CompetenciaId, cascadeDelete: true)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.CompetenciaId)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.CompetenciasCardinalesRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        CompetenciaId = c.Int(nullable: false),
                        Nivel = c.String(nullable: false, maxLength: 10),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Recl.CompetenciasCardinales", t => t.CompetenciaId, cascadeDelete: true)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.CompetenciaId)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.CompetenciasGerencialesRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        CompetenciaId = c.Int(nullable: false),
                        Nivel = c.String(nullable: false, maxLength: 10),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Recl.CompetenciasGerenciales", t => t.CompetenciaId, cascadeDelete: true)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.CompetenciaId)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.DocumentosClienteRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Documento = c.String(nullable: false, maxLength: 100),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.EscolaridadesRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        EscolaridadId = c.Int(nullable: false),
                        EstadoEstudioId = c.Int(nullable: false),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.GradosEstudios", t => t.EscolaridadId, cascadeDelete: true)
                .ForeignKey("Recl.EstadosEstudios", t => t.EstadoEstudioId, cascadeDelete: true)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.EscolaridadId)
                .Index(t => t.EstadoEstudioId)
                .Index(t => t.RequisicionId);
            
            //CreateTable(
            //    "Sist.Estatus",
            //    c => new
            //        {
            //            Id = c.Int(nullable: false, identity: true),
            //            Descripcion = c.String(nullable: false, maxLength: 50),
            //            ModuloId = c.Int(nullable: false),
            //            Activo = c.Boolean(),
            //        })
            //    .PrimaryKey(t => t.Id)
            //    .ForeignKey("Sist.Modulos", t => t.ModuloId, cascadeDelete: true)
            //    .Index(t => t.ModuloId);
            
            CreateTable(
                "Vtas.HorariosRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Nombre = c.String(nullable: false, maxLength: 100),
                        deDiaId = c.Byte(nullable: false),
                        aDiaId = c.Byte(nullable: false),
                        deHora = c.String(nullable: false, maxLength: 15),
                        aHora = c.String(nullable: false, maxLength: 15),
                        numeroVacantes = c.Byte(nullable: false),
                        Especificaciones = c.String(nullable: false, maxLength: 500),
                        Activo = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Recl.DiasSemana", t => t.aDiaId, cascadeDelete: false)
                .ForeignKey("Recl.DiasSemana", t => t.deDiaId, cascadeDelete: false)
                .Index(t => t.deDiaId)
                .Index(t => t.aDiaId);
            
            CreateTable(
                "Vtas.ObservacionesRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Observaciones = c.String(nullable: false, maxLength: 100),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.PrestacionesClienteRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Prestamo = c.String(nullable: false, maxLength: 100),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Sist.Prioridades",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Descripcion = c.String(nullable: false, maxLength: 50),
                        Activo = c.Boolean(),
                        ModuloId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Modulos", t => t.ModuloId, cascadeDelete: true)
                .Index(t => t.ModuloId);
            
            CreateTable(
                "Vtas.ProcesosRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Proceso = c.String(nullable: false, maxLength: 100),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.PsicometriasClienteRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Psicometria = c.String(maxLength: 50),
                        Descripcion = c.String(maxLength: 200),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Vtas.PsicometriasDamsaRequi",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        PsicometriaId = c.Int(nullable: false),
                        RequisicionId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Recl.TiposPsicometrias", t => t.PsicometriaId, cascadeDelete: true)
                .ForeignKey("Vtas.Requisiciones", t => t.RequisicionId, cascadeDelete: true)
                .Index(t => t.PsicometriaId)
                .Index(t => t.RequisicionId);
            
            CreateTable(
                "Sist.UsuariosGrupos",
                c => new
                    {
                        Usuarios_Id = c.Guid(nullable: false, identity: true),
                        Grupos_Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => new { t.Usuarios_Id, t.Grupos_Id })
                .ForeignKey("Sist.Usuarios", t => t.Usuarios_Id)
                .ForeignKey("Sist.Grupos", t => t.Grupos_Id)
                .Index(t => t.Usuarios_Id)
                .Index(t => t.Grupos_Id);
            
            CreateTable(
                "Sist.RolesUsuarios",
                c => new
                    {
                        Roles_Id = c.Int(nullable: false),
                        Usuarios_Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => new { t.Roles_Id, t.Usuarios_Id })
                .ForeignKey("Sist.Roles", t => t.Roles_Id, cascadeDelete: true)
                .ForeignKey("Sist.Usuarios", t => t.Usuarios_Id, cascadeDelete: true)
                .Index(t => t.Roles_Id)
                .Index(t => t.Usuarios_Id);
            
            CreateTable(
                "Sist.Grupos",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Grupo = c.String(nullable: false, maxLength: 100),
                        Activo = c.Boolean(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.Id)
                .Index(t => t.Id);

            CreateTable(
                "Sist.Usuarios",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Usuario = c.String(nullable: false, maxLength: 20),
                    Password = c.String(nullable: false, maxLength: 40),
                    Activo = c.Boolean(nullable: false),
                    TipoUsuarioId = c.Byte(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.Id)
                .ForeignKey("Sist.TiposUsuarios", t => t.TipoUsuarioId, cascadeDelete: true)
                .Index(t => t.Id)
                .Index(t => t.TipoUsuarioId);

            AddColumn("BTra.Postulaciones", "RequisicionId", c => c.Guid(nullable: false));
            AlterColumn("BTra.AcercaDeMi", "AcercaDeMi", c => c.String(maxLength: 400));
            AlterColumn("BTra.AcercaDeMi", "PuestoDeseado", c => c.String(maxLength: 40));
            AlterColumn("BTra.AreasExperiencia", "areaExperiencia", c => c.String(maxLength: 200));
            AlterColumn("BTra.AreasInteres", "areaInteres", c => c.String(maxLength: 200));
            AlterColumn("Sist.Personas", "Nombre", c => c.String(maxLength: 50));
            AlterColumn("Sist.Personas", "ApellidoPaterno", c => c.String(maxLength: 50));
            AlterColumn("Sist.Personas", "ApellidoMaterno", c => c.String(maxLength: 50));
            AlterColumn("Sist.GiroEmpresas", "giroEmpresa", c => c.String());
            AlterColumn("BTra.TiposDiscapacidades", "tipoDiscapacidad", c => c.String(maxLength: 50));
            AlterColumn("BTra.TiposLicencias", "tipoLicencia", c => c.String(maxLength: 1));
            AlterColumn("BTra.TiposLicencias", "Descripcion", c => c.String(maxLength: 250));
            AlterColumn("BTra.Certificaciones", "certificacion", c => c.String(maxLength: 200));
            AlterColumn("BTra.Certificaciones", "AutoridadEmisora", c => c.String(maxLength: 200));
            AlterColumn("BTra.Certificaciones", "Licencia", c => c.String(maxLength: 100));
            AlterColumn("BTra.Certificaciones", "UrlCertificacion", c => c.String(maxLength: 500));
            AlterColumn("BTra.Certificaciones", "noVence", c => c.Boolean());
            AlterColumn("BTra.Certificaciones", "YearInicioId", c => c.Int());
            AlterColumn("BTra.Certificaciones", "MonthInicioId", c => c.Int());
            AlterColumn("BTra.Certificaciones", "YearTerminoId", c => c.Int());
            AlterColumn("BTra.Certificaciones", "MonthTerminoId", c => c.Int());
            AlterColumn("BTra.ConocimientosHabilidades", "Conocimiento", c => c.String(maxLength: 50));
            AlterColumn("BTra.InstitucionesEducativas", "institucionEducativa", c => c.String(maxLength: 250));
            AlterColumn("BTra.Cursos", "curso", c => c.String(maxLength: 200));
            AlterColumn("BTra.ExperienciasProfesionales", "Empresa", c => c.String(maxLength: 100));
            AlterColumn("BTra.ExperienciasProfesionales", "CargoAsignado", c => c.String(maxLength: 100));
            AlterColumn("BTra.ExperienciasProfesionales", "TrabajoActual", c => c.Boolean());
            AlterColumn("BTra.ExperienciasProfesionales", "Descripcion", c => c.String(maxLength: 200));
            AlterColumn("BTra.Formaciones", "DocumentoValidadorId", c => c.Int());
            AlterColumn("BTra.Formaciones", "YearInicioId", c => c.Int());
            AlterColumn("BTra.Formaciones", "MonthInicioId", c => c.Int());
            AlterColumn("BTra.Formaciones", "YearTerminoId", c => c.Int());
            AlterColumn("BTra.Formaciones", "MonthTerminoId", c => c.Int());
            AlterColumn("BTra.Carreras", "carrera", c => c.String(maxLength: 250));
            AlterColumn("BTra.DocumentosValidadores", "documentoValidador", c => c.String(maxLength: 100));
            AlterColumn("BTra.PerfilExperiencia", "perfilExperiencia", c => c.String(maxLength: 200));
            AlterColumn("Recl.ActividadesPerfil", "Actividades", c => c.String(nullable: false, maxLength: 200));
            AlterColumn("Recl.DAMFO_290", "NombrePerfil", c => c.String(maxLength: 100));
            AlterColumn("Recl.DAMFO_290", "Experiencia", c => c.String(nullable: false, maxLength: 500));
            AlterColumn("Recl.BeneficiosPerfil", "Observaciones", c => c.String(maxLength: 500));
            AlterColumn("Recl.CompetenciaAreaPerfil", "Nivel", c => c.String(nullable: false, maxLength: 10));
            AlterColumn("Recl.CompetenciaCardinalPerfil", "Nivel", c => c.String(nullable: false, maxLength: 10));
            AlterColumn("Recl.CompetenciaGerencialPerfil", "Nivel", c => c.String(nullable: false, maxLength: 10));
            AlterColumn("Recl.DocumentosClientes", "Documento", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("Recl.HorariosPerfiles", "Especificaciones", c => c.String(nullable: false, maxLength: 500));
            AlterColumn("Recl.ObservacionesPerfil", "Observaciones", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("Recl.PrestacionesClientePerfil", "Prestamo", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("Recl.ProcesoPerfil", "Proceso", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("BTra.StatusPostulaciones", "Status", c => c.String(maxLength: 50));
            AlterColumn("Recl.RedesSociales", "PersonaId", c => c.Guid());
            AlterColumn("BTra.TiposRedesSociales", "tipoRedSocial", c => c.String(maxLength: 50));
            AlterColumn("Recl.RutasPerfil", "Ruta", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("Recl.RutasPerfil", "Via", c => c.String(maxLength: 100));
            CreateIndex("BTra.Certificaciones", "YearInicioId");
            CreateIndex("BTra.Certificaciones", "MonthInicioId");
            CreateIndex("BTra.Certificaciones", "YearTerminoId");
            CreateIndex("BTra.Certificaciones", "MonthTerminoId");
            CreateIndex("BTra.Formaciones", "DocumentoValidadorId");
            CreateIndex("BTra.Formaciones", "YearInicioId");
            CreateIndex("BTra.Formaciones", "MonthInicioId");
            CreateIndex("BTra.Formaciones", "YearTerminoId");
            CreateIndex("BTra.Formaciones", "MonthTerminoId");
            CreateIndex("Recl.CompetenciaAreaPerfil", "CompetenciaId");
            CreateIndex("Recl.CompetenciaCardinalPerfil", "CompetenciaId");
            CreateIndex("Recl.CompetenciaGerencialPerfil", "CompetenciaId");
            CreateIndex("BTra.Postulaciones", "RequisicionId");
            CreateIndex("Recl.RedesSociales", "PersonaId");
            CreateIndex("Recl.RutasPerfil", "DireccionId");
            AddForeignKey("Recl.CompetenciaAreaPerfil", "CompetenciaId", "Recl.CompetenciasAreas", "id", cascadeDelete: true);
            AddForeignKey("Recl.CompetenciaCardinalPerfil", "CompetenciaId", "Recl.CompetenciasCardinales", "id", cascadeDelete: true);
            AddForeignKey("Recl.CompetenciaGerencialPerfil", "CompetenciaId", "Recl.CompetenciasGerenciales", "id", cascadeDelete: true);
            AddForeignKey("BTra.Postulaciones", "RequisicionId", "Vtas.Requisiciones", "Id", cascadeDelete:false);
            AddForeignKey("Recl.RutasPerfil", "DireccionId", "Sist.Direcciones", "Id", cascadeDelete: true);
            AddForeignKey("BTra.Certificaciones", "MonthInicioId", "Sist.Months", "Id");
            AddForeignKey("BTra.Certificaciones", "MonthTerminoId", "Sist.Months", "Id");
            AddForeignKey("BTra.Certificaciones", "YearInicioId", "Sist.Years", "Id");
            AddForeignKey("BTra.Certificaciones", "YearTerminoId", "Sist.Years", "Id");
            AddForeignKey("BTra.Formaciones", "DocumentoValidadorId", "BTra.DocumentosValidadores", "Id");
            AddForeignKey("BTra.Formaciones", "MonthInicioId", "Sist.Months", "Id");
            AddForeignKey("BTra.Formaciones", "MonthTerminoId", "Sist.Months", "Id");
            AddForeignKey("BTra.Formaciones", "YearInicioId", "Sist.Years", "Id");
            AddForeignKey("BTra.Formaciones", "YearTerminoId", "Sist.Years", "Id");
            AddForeignKey("Recl.RedesSociales", "PersonaId", "Sist.Personas", "Id");
            DropColumn("BTra.AcercaDeMi", "SitioWeb");
            DropColumn("Recl.DAMFO_290", "NivelId");
            
            DropColumn("Recl.RutasPerfil", "DAMFO290Id");
            DropTable("Sist.PerfilReclutamientoes");
            DropTable("Sist.CandidatoConocimientoInformatico");
            DropTable("Sist.ConocimientosInformaticos");
            DropTable("Sist.Cargos");
            DropTable("Sist.ContactoPerfil");
            DropTable("Sist.PerfilesProfesionales");
           
            DropTable("Sist.TelefonoPerfil");
        }
        
        public override void Down()
        {
            CreateTable(
                "Sist.TelefonoPerfil",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        telefonoId = c.Guid(nullable: false),
                        DAMFO290Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.Vacantes",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        VBtra = c.String(),
                        Experiencia = c.String(),
                        DireccionId = c.Guid(nullable: false),
                        CategoriaId = c.Int(nullable: false),
                        ClienteId = c.Guid(nullable: false),
                        FechaCreacion = c.DateTime(nullable: false),
                        HorarioId = c.Guid(nullable: false),
                        Actividades = c.String(),
                        ContratoInicialId = c.Int(nullable: false),
                        ContratoFinalId = c.Int(nullable: false),
                        SueldoMinimo = c.Decimal(nullable: false, precision: 18, scale: 2),
                        DAMFO290Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.PerfilesProfesionales",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        CargoId = c.Int(nullable: false),
                        AreaId = c.Int(nullable: false),
                        Descripcion = c.String(),
                        PuestoDeseado = c.String(),
                        Salario = c.Decimal(nullable: false, precision: 18, scale: 2),
                        CandidatoId = c.Guid(nullable: false),
                        SitioWeb = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.ContactoPerfil",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        ContactoId = c.Guid(nullable: false),
                        DAMFO290Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.Cargos",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nombre = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.ConocimientosInformaticos",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Nombre = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.CandidatoConocimientoInformatico",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        ConocimientoInformaticoId = c.Guid(nullable: false),
                        PorcentageId = c.Int(nullable: false),
                        CandidatoId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Sist.PerfilReclutamientoes",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        ClienteId = c.Guid(nullable: false),
                        TipoReclutamientoId = c.Int(nullable: false),
                        ClaseReclutamientoId = c.Int(nullable: false),
                        NombrePerfil = c.String(),
                        GeneroId = c.Byte(nullable: false),
                        EdadMinuma = c.Short(nullable: false),
                        EdadMaxima = c.Short(nullable: false),
                        EstadoCivilId = c.Byte(nullable: false),
                        AreaId = c.Int(nullable: false),
                        EstadoEstudioId = c.Int(nullable: false),
                        Experiencia = c.String(),
                        AptitudId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("Recl.RutasPerfil", "DAMFO290Id", c => c.Guid(nullable: false));
            AddColumn("BTra.Postulaciones", "VacanteId", c => c.Guid(nullable: false));
            AddColumn("Recl.DAMFO_290", "NivelId", c => c.Int(nullable: false));
            AddColumn("BTra.AcercaDeMi", "SitioWeb", c => c.String());
            DropForeignKey("Recl.RedesSociales", "PersonaId", "Sist.Personas");
            DropForeignKey("BTra.Formaciones", "YearTerminoId", "Sist.Years");
            DropForeignKey("BTra.Formaciones", "YearInicioId", "Sist.Years");
            DropForeignKey("BTra.Formaciones", "MonthTerminoId", "Sist.Months");
            DropForeignKey("BTra.Formaciones", "MonthInicioId", "Sist.Months");
            DropForeignKey("BTra.Formaciones", "DocumentoValidadorId", "BTra.DocumentosValidadores");
            DropForeignKey("BTra.Certificaciones", "YearTerminoId", "Sist.Years");
            DropForeignKey("BTra.Certificaciones", "YearInicioId", "Sist.Years");
            DropForeignKey("BTra.Certificaciones", "MonthTerminoId", "Sist.Months");
            DropForeignKey("BTra.Certificaciones", "MonthInicioId", "Sist.Months");
            DropForeignKey("Sist.Usuarios", "TipoUsuarioId", "Sist.TiposUsuarios");
            DropForeignKey("Sist.Usuarios", "Id", "Sist.Personas");
            DropForeignKey("Sist.Grupos", "Id", "Sist.Personas");
            DropForeignKey("Recl.RutasPerfil", "DireccionId", "Sist.Direcciones");
            DropForeignKey("BTra.Postulaciones", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.Requisiciones", "TipoReclutamientoId", "Recl.TiposReclutamientos");
            DropForeignKey("Vtas.Requisiciones", "TipoNominaId", "Recl.TiposNominas");
            DropForeignKey("Vtas.PsicometriasDamsaRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.PsicometriasDamsaRequi", "PsicometriaId", "Recl.TiposPsicometrias");
            DropForeignKey("Vtas.PsicometriasClienteRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.Requisiciones", "PropietarioId", "Sist.Usuarios");
            DropForeignKey("Vtas.ProcesosRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.Requisiciones", "PrioridadId", "Sist.Prioridades");
            DropForeignKey("Sist.Prioridades", "ModuloId", "Sist.Modulos");
            DropForeignKey("Vtas.PrestacionesClienteRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.Requisiciones", "PeriodoPagoId", "Recl.PeriodosPagos");
            DropForeignKey("Vtas.ObservacionesRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.Requisiciones", "HorarioId", "Vtas.HorariosRequi");
            DropForeignKey("Vtas.HorariosRequi", "deDiaId", "Recl.DiasSemana");
            DropForeignKey("Vtas.HorariosRequi", "aDiaId", "Recl.DiasSemana");
            DropForeignKey("Vtas.Requisiciones", "GeneroId", "Sist.Generos");
            DropForeignKey("Vtas.Requisiciones", "EstatusId", "Sist.Estatus");
            DropForeignKey("Sist.Estatus", "ModuloId", "Sist.Modulos");
            DropForeignKey("Vtas.Requisiciones", "EstadoCivilId", "Sist.EstadosCiviles");
            DropForeignKey("Vtas.EscolaridadesRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.EscolaridadesRequi", "EstadoEstudioId", "Recl.EstadosEstudios");
            DropForeignKey("Vtas.EscolaridadesRequi", "EscolaridadId", "Sist.GradosEstudios");
            DropForeignKey("Vtas.DocumentosClienteRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.Requisiciones", "DireccionId", "Sist.Direcciones");
            DropForeignKey("Vtas.Requisiciones", "DiaPagoId", "Recl.DiasSemana");
            DropForeignKey("Vtas.Requisiciones", "DiaCorteId", "Recl.DiasSemana");
            DropForeignKey("Vtas.Requisiciones", "DAMFO290Id", "Recl.DAMFO_290");
            DropForeignKey("Vtas.Requisiciones", "ContratoInicialId", "Recl.TiposContratos");
            DropForeignKey("Vtas.Requisiciones", "ContratoFinalId", "Recl.TiposContratos");
            DropForeignKey("Vtas.CompetenciasGerencialesRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.CompetenciasGerencialesRequi", "CompetenciaId", "Recl.CompetenciasGerenciales");
            DropForeignKey("Vtas.CompetenciasCardinalesRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.CompetenciasCardinalesRequi", "CompetenciaId", "Recl.CompetenciasCardinales");
            DropForeignKey("Vtas.CompetenciasAreasRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.CompetenciasAreasRequi", "CompetenciaId", "Recl.CompetenciasAreas");
            DropForeignKey("Vtas.Requisiciones", "ClienteId", "Vtas.Clientes");
            DropForeignKey("Vtas.Requisiciones", "ClaseReclutamientoId", "Recl.ClasesReclutamientos");
            DropForeignKey("Vtas.BeneficiosRequi", "TipoBeneficioId", "Recl.TiposBeneficios");
            DropForeignKey("Vtas.BeneficiosRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.AsignacionesRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.AsignacionesRequi", "GrpUsrId", "Sist.Personas");
            DropForeignKey("Vtas.Requisiciones", "AreaId", "Recl.Areas");
            DropForeignKey("Vtas.AptitudesRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Vtas.AptitudesRequi", "AptitudId", "Recl.Aptitudes");
            DropForeignKey("Vtas.Requisiciones", "AprobadorId", "Sist.Usuarios");
            DropForeignKey("Vtas.ActividadesRequi", "RequisicionId", "Vtas.Requisiciones");
            DropForeignKey("Recl.CompetenciaGerencialPerfil", "CompetenciaId", "Recl.CompetenciasGerenciales");
            DropForeignKey("Recl.CompetenciaCardinalPerfil", "CompetenciaId", "Recl.CompetenciasCardinales");
            DropForeignKey("Recl.CompetenciaAreaPerfil", "CompetenciaId", "Recl.CompetenciasAreas");
            DropForeignKey("Sist.RolesUsuarios", "Usuarios_Id", "Sist.Usuarios");
            DropForeignKey("Sist.RolesUsuarios", "Roles_Id", "Sist.Roles");
            DropForeignKey("Sist.Roles", "ModuloId", "Sist.Modulos");
            DropForeignKey("Sist.UsuariosGrupos", "Grupos_Id", "Sist.Grupos");
            DropForeignKey("Sist.UsuariosGrupos", "Usuarios_Id", "Sist.Usuarios");
            DropIndex("Sist.Usuarios", new[] { "TipoUsuarioId" });
            DropIndex("Sist.Usuarios", new[] { "Id" });
            DropIndex("Sist.Grupos", new[] { "Id" });
            DropIndex("Sist.RolesUsuarios", new[] { "Usuarios_Id" });
            DropIndex("Sist.RolesUsuarios", new[] { "Roles_Id" });
            DropIndex("Sist.UsuariosGrupos", new[] { "Grupos_Id" });
            DropIndex("Sist.UsuariosGrupos", new[] { "Usuarios_Id" });
            DropIndex("Recl.RutasPerfil", new[] { "DireccionId" });
            DropIndex("Recl.RedesSociales", new[] { "PersonaId" });
            DropIndex("BTra.Postulaciones", new[] { "RequisicionId" });
            DropIndex("Vtas.PsicometriasDamsaRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.PsicometriasDamsaRequi", new[] { "PsicometriaId" });
            DropIndex("Vtas.PsicometriasClienteRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.ProcesosRequi", new[] { "RequisicionId" });
            DropIndex("Sist.Prioridades", new[] { "ModuloId" });
            DropIndex("Vtas.PrestacionesClienteRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.ObservacionesRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.HorariosRequi", new[] { "aDiaId" });
            DropIndex("Vtas.HorariosRequi", new[] { "deDiaId" });
            DropIndex("Sist.Estatus", new[] { "ModuloId" });
            DropIndex("Vtas.EscolaridadesRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.EscolaridadesRequi", new[] { "EstadoEstudioId" });
            DropIndex("Vtas.EscolaridadesRequi", new[] { "EscolaridadId" });
            DropIndex("Vtas.DocumentosClienteRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.CompetenciasGerencialesRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.CompetenciasGerencialesRequi", new[] { "CompetenciaId" });
            DropIndex("Vtas.CompetenciasCardinalesRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.CompetenciasCardinalesRequi", new[] { "CompetenciaId" });
            DropIndex("Vtas.CompetenciasAreasRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.CompetenciasAreasRequi", new[] { "CompetenciaId" });
            DropIndex("Vtas.BeneficiosRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.BeneficiosRequi", new[] { "TipoBeneficioId" });
            DropIndex("Vtas.AsignacionesRequi", new[] { "GrpUsrId" });
            DropIndex("Vtas.AsignacionesRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.AptitudesRequi", new[] { "RequisicionId" });
            DropIndex("Vtas.AptitudesRequi", new[] { "AptitudId" });
            DropIndex("Vtas.Requisiciones", new[] { "HorarioId" });
            DropIndex("Vtas.Requisiciones", new[] { "DireccionId" });
            DropIndex("Vtas.Requisiciones", new[] { "DAMFO290Id" });
            DropIndex("Vtas.Requisiciones", new[] { "EstatusId" });
            DropIndex("Vtas.Requisiciones", new[] { "PrioridadId" });
            DropIndex("Vtas.Requisiciones", new[] { "AprobadorId" });
            DropIndex("Vtas.Requisiciones", new[] { "PropietarioId" });
            DropIndex("Vtas.Requisiciones", new[] { "ContratoFinalId" });
            DropIndex("Vtas.Requisiciones", new[] { "ContratoInicialId" });
            DropIndex("Vtas.Requisiciones", new[] { "PeriodoPagoId" });
            DropIndex("Vtas.Requisiciones", new[] { "DiaPagoId" });
            DropIndex("Vtas.Requisiciones", new[] { "TipoNominaId" });
            DropIndex("Vtas.Requisiciones", new[] { "DiaCorteId" });
            DropIndex("Vtas.Requisiciones", new[] { "AreaId" });
            DropIndex("Vtas.Requisiciones", new[] { "EstadoCivilId" });
            DropIndex("Vtas.Requisiciones", new[] { "GeneroId" });
            DropIndex("Vtas.Requisiciones", new[] { "ClaseReclutamientoId" });
            DropIndex("Vtas.Requisiciones", new[] { "TipoReclutamientoId" });
            DropIndex("Vtas.Requisiciones", new[] { "ClienteId" });
            DropIndex("Vtas.ActividadesRequi", new[] { "RequisicionId" });
            DropIndex("Recl.CompetenciaGerencialPerfil", new[] { "CompetenciaId" });
            DropIndex("Recl.CompetenciaCardinalPerfil", new[] { "CompetenciaId" });
            DropIndex("Recl.CompetenciaAreaPerfil", new[] { "CompetenciaId" });
            DropIndex("BTra.Formaciones", new[] { "MonthTerminoId" });
            DropIndex("BTra.Formaciones", new[] { "YearTerminoId" });
            DropIndex("BTra.Formaciones", new[] { "MonthInicioId" });
            DropIndex("BTra.Formaciones", new[] { "YearInicioId" });
            DropIndex("BTra.Formaciones", new[] { "DocumentoValidadorId" });
            DropIndex("BTra.Certificaciones", new[] { "MonthTerminoId" });
            DropIndex("BTra.Certificaciones", new[] { "YearTerminoId" });
            DropIndex("BTra.Certificaciones", new[] { "MonthInicioId" });
            DropIndex("BTra.Certificaciones", new[] { "YearInicioId" });
            DropIndex("Sist.Roles", new[] { "ModuloId" });
            AlterColumn("Recl.RutasPerfil", "Via", c => c.String(maxLength: 100, unicode: false));
            AlterColumn("Recl.RutasPerfil", "Ruta", c => c.String(nullable: false, maxLength: 100, unicode: false));
            AlterColumn("BTra.TiposRedesSociales", "tipoRedSocial", c => c.String());
            AlterColumn("Recl.RedesSociales", "PersonaId", c => c.Guid(nullable: false));
            AlterColumn("BTra.StatusPostulaciones", "Status", c => c.String());
            AlterColumn("Recl.ProcesoPerfil", "Proceso", c => c.String(nullable: false, maxLength: 100, unicode: false));
            AlterColumn("Recl.PrestacionesClientePerfil", "Prestamo", c => c.String(nullable: false, maxLength: 100, unicode: false));
            AlterColumn("Recl.ObservacionesPerfil", "Observaciones", c => c.String(nullable: false, maxLength: 100, unicode: false));
            AlterColumn("Recl.HorariosPerfiles", "Especificaciones", c => c.String(nullable: false, maxLength: 500, unicode: false));
            AlterColumn("Recl.DocumentosClientes", "Documento", c => c.String());
            AlterColumn("Recl.CompetenciaGerencialPerfil", "Nivel", c => c.String(nullable: false, maxLength: 5));
            AlterColumn("Recl.CompetenciaCardinalPerfil", "Nivel", c => c.String(nullable: false, maxLength: 5));
            AlterColumn("Recl.CompetenciaAreaPerfil", "Nivel", c => c.String(nullable: false, maxLength: 5));
            AlterColumn("Recl.BeneficiosPerfil", "Observaciones", c => c.String(maxLength: 500, unicode: false));
            AlterColumn("Recl.DAMFO_290", "Experiencia", c => c.String(nullable: false, maxLength: 500, unicode: false));
            AlterColumn("Recl.DAMFO_290", "NombrePerfil", c => c.String(maxLength: 100, unicode: false));
            AlterColumn("Recl.ActividadesPerfil", "Actividades", c => c.String(nullable: false, maxLength: 200, unicode: false));
            AlterColumn("BTra.PerfilExperiencia", "perfilExperiencia", c => c.String());
            AlterColumn("BTra.DocumentosValidadores", "documentoValidador", c => c.String());
            AlterColumn("BTra.Carreras", "carrera", c => c.String());
            AlterColumn("BTra.Formaciones", "MonthTerminoId", c => c.Int(nullable: false));
            AlterColumn("BTra.Formaciones", "YearTerminoId", c => c.Int(nullable: false));
            AlterColumn("BTra.Formaciones", "MonthInicioId", c => c.Int(nullable: false));
            AlterColumn("BTra.Formaciones", "YearInicioId", c => c.Int(nullable: false));
            AlterColumn("BTra.Formaciones", "DocumentoValidadorId", c => c.Int(nullable: false));
            AlterColumn("BTra.ExperienciasProfesionales", "Descripcion", c => c.String());
            AlterColumn("BTra.ExperienciasProfesionales", "TrabajoActual", c => c.Boolean(nullable: false));
            AlterColumn("BTra.ExperienciasProfesionales", "CargoAsignado", c => c.String());
            AlterColumn("BTra.ExperienciasProfesionales", "Empresa", c => c.String());
            AlterColumn("BTra.Cursos", "curso", c => c.String());
            AlterColumn("BTra.InstitucionesEducativas", "institucionEducativa", c => c.String());
            AlterColumn("BTra.ConocimientosHabilidades", "Conocimiento", c => c.String());
            AlterColumn("BTra.Certificaciones", "MonthTerminoId", c => c.Int(nullable: false));
            AlterColumn("BTra.Certificaciones", "YearTerminoId", c => c.Int(nullable: false));
            AlterColumn("BTra.Certificaciones", "MonthInicioId", c => c.Int(nullable: false));
            AlterColumn("BTra.Certificaciones", "YearInicioId", c => c.Int(nullable: false));
            AlterColumn("BTra.Certificaciones", "noVence", c => c.Boolean(nullable: false));
            AlterColumn("BTra.Certificaciones", "UrlCertificacion", c => c.String());
            AlterColumn("BTra.Certificaciones", "Licencia", c => c.String());
            AlterColumn("BTra.Certificaciones", "AutoridadEmisora", c => c.String());
            AlterColumn("BTra.Certificaciones", "certificacion", c => c.String());
            AlterColumn("BTra.TiposLicencias", "Descripcion", c => c.String());
            AlterColumn("BTra.TiposLicencias", "tipoLicencia", c => c.String());
            AlterColumn("BTra.TiposDiscapacidades", "tipoDiscapacidad", c => c.String());
            AlterColumn("Sist.GiroEmpresas", "giroEmpresa", c => c.String(nullable: false, maxLength: 15));
            AlterColumn("Sist.Personas", "ApellidoMaterno", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("Sist.Personas", "ApellidoPaterno", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("Sist.Personas", "Nombre", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("BTra.AreasInteres", "areaInteres", c => c.String());
            AlterColumn("BTra.AreasExperiencia", "areaExperiencia", c => c.String());
            AlterColumn("BTra.AcercaDeMi", "PuestoDeseado", c => c.String());
            AlterColumn("BTra.AcercaDeMi", "AcercaDeMi", c => c.String());
            DropColumn("BTra.Postulaciones", "RequisicionId");
            DropTable("Sist.Usuarios");
            DropTable("Sist.Grupos");
            DropTable("Sist.RolesUsuarios");
            DropTable("Sist.UsuariosGrupos");
            DropTable("Vtas.PsicometriasDamsaRequi");
            DropTable("Vtas.PsicometriasClienteRequi");
            DropTable("Vtas.ProcesosRequi");
            DropTable("Sist.Prioridades");
            DropTable("Vtas.PrestacionesClienteRequi");
            DropTable("Vtas.ObservacionesRequi");
            DropTable("Vtas.HorariosRequi");
            DropTable("Sist.Estatus");
            DropTable("Vtas.EscolaridadesRequi");
            DropTable("Vtas.DocumentosClienteRequi");
            DropTable("Vtas.CompetenciasGerencialesRequi");
            DropTable("Vtas.CompetenciasCardinalesRequi");
            DropTable("Vtas.CompetenciasAreasRequi");
            DropTable("Vtas.BeneficiosRequi");
            DropTable("Vtas.AsignacionesRequi");
            DropTable("Vtas.AptitudesRequi");
            DropTable("Vtas.Requisiciones");
            DropTable("Vtas.ActividadesRequi");
            DropTable("Sist.TiposUsuarios");
            DropTable("Sist.Modulos");
            DropTable("Sist.Roles");
            CreateIndex("Sist.TelefonoPerfil", "DAMFO290Id");
            CreateIndex("Sist.TelefonoPerfil", "telefonoId");
            CreateIndex("Recl.RutasPerfil", "DAMFO290Id");
            CreateIndex("Recl.RedesSociales", "PersonaId");
            CreateIndex("Sist.Vacantes", "ContratoFinalId");
            CreateIndex("Sist.Vacantes", "ContratoInicialId");
            CreateIndex("Sist.Vacantes", "HorarioId");
            CreateIndex("Sist.Vacantes", "ClienteId");
            CreateIndex("Sist.Vacantes", "CategoriaId");
            CreateIndex("Sist.Vacantes", "DireccionId");
            CreateIndex("BTra.Postulaciones", "VacanteId");
            CreateIndex("Sist.PerfilesProfesionales", "AreaId");
            CreateIndex("Sist.PerfilesProfesionales", "CargoId");
            CreateIndex("Sist.ContactoPerfil", "DAMFO290Id");
            CreateIndex("Sist.ContactoPerfil", "ContactoId");
            CreateIndex("Sist.CandidatoConocimientoInformatico", "PorcentageId");
            CreateIndex("Sist.CandidatoConocimientoInformatico", "ConocimientoInformaticoId");
            CreateIndex("Sist.PerfilReclutamientoes", "AptitudId");
            CreateIndex("Sist.PerfilReclutamientoes", "EstadoEstudioId");
            CreateIndex("Sist.PerfilReclutamientoes", "EstadoCivilId");
            CreateIndex("Sist.PerfilReclutamientoes", "GeneroId");
            CreateIndex("Sist.PerfilReclutamientoes", "ClaseReclutamientoId");
            CreateIndex("Sist.PerfilReclutamientoes", "TipoReclutamientoId");
            CreateIndex("Sist.PerfilReclutamientoes", "ClienteId");
            CreateIndex("Recl.DAMFO_290", "NivelId");
            CreateIndex("BTra.Formaciones", "MonthTerminoId");
            CreateIndex("BTra.Formaciones", "YearTerminoId");
            CreateIndex("BTra.Formaciones", "MonthInicioId");
            CreateIndex("BTra.Formaciones", "YearInicioId");
            CreateIndex("BTra.Formaciones", "DocumentoValidadorId");
            CreateIndex("BTra.Certificaciones", "MonthTerminoId");
            CreateIndex("BTra.Certificaciones", "YearTerminoId");
            CreateIndex("BTra.Certificaciones", "MonthInicioId");
            CreateIndex("BTra.Certificaciones", "YearInicioId");
            AddForeignKey("Sist.RedesSociales", "PersonaId", "Sist.Personas", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Formaciones", "YearTerminoId", "Sist.Years", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Formaciones", "YearInicioId", "Sist.Years", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Formaciones", "MonthTerminoId", "Sist.Months", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Formaciones", "MonthInicioId", "Sist.Months", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Formaciones", "DocumentoValidadorId", "Sist.DocumentosValidadores", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Certificaciones", "YearTerminoId", "Sist.Years", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Certificaciones", "YearInicioId", "Sist.Years", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Certificaciones", "MonthTerminoId", "Sist.Months", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Certificaciones", "MonthInicioId", "Sist.Months", "Id", cascadeDelete: true);
            AddForeignKey("Sist.TelefonoPerfil", "telefonoId", "Sist.Telefonos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.TelefonoPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.RutasPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Postulaciones", "VacanteId", "Sist.Vacantes", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Vacantes", "HorarioId", "Sist.HorariosPerfiles", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Vacantes", "DireccionId", "Sist.Direcciones", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Vacantes", "ContratoInicialId", "Sist.TiposContratos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Vacantes", "ContratoFinalId", "Sist.TiposContratos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.Vacantes", "ClienteId", "Sist.Clientes", "Id");
            AddForeignKey("Sist.Vacantes", "CategoriaId", "Sist.Areas", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PerfilesProfesionales", "CargoId", "Sist.Cargos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PerfilesProfesionales", "AreaId", "Sist.Areas", "Id", cascadeDelete: true);
            AddForeignKey("Sist.ContactoPerfil", "DAMFO290Id", "Sist.DAMFO_290", "Id", cascadeDelete: true);
            AddForeignKey("Sist.ContactoPerfil", "ContactoId", "Sist.Contactos", "Id");
            AddForeignKey("Sist.CandidatoConocimientoInformatico", "PorcentageId", "Sist.Porcentages", "Id", cascadeDelete: true);
            AddForeignKey("Sist.CandidatoConocimientoInformatico", "ConocimientoInformaticoId", "Sist.ConocimientosInformaticos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.DAMFO_290", "NivelId", "Sist.EstadosEstudios", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PerfilReclutamientoes", "TipoReclutamientoId", "Sist.TiposReclutamientos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PerfilReclutamientoes", "GeneroId", "Sist.Generos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PerfilReclutamientoes", "EstadoEstudioId", "Sist.EstadosEstudios", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PerfilReclutamientoes", "EstadoCivilId", "Sist.EstadosCiviles", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PerfilReclutamientoes", "ClienteId", "Sist.Clientes", "Id");
            AddForeignKey("Sist.PerfilReclutamientoes", "ClaseReclutamientoId", "Sist.ClasesReclutamientos", "Id", cascadeDelete: true);
            AddForeignKey("Sist.PerfilReclutamientoes", "AptitudId", "Sist.Aptitudes", "Id", cascadeDelete: true);
            MoveTable(name: "Recl.RutasPerfil", newSchema: "Sist");
            MoveTable(name: "BTra.TiposRedesSociales", newSchema: "Sist");
            MoveTable(name: "Recl.RedesSociales", newSchema: "Sist");
            MoveTable(name: "Recl.PrestacionesLey", newSchema: "Sist");
            MoveTable(name: "BTra.StatusPostulaciones", newSchema: "Sist");
            MoveTable(name: "BTra.Postulaciones", newSchema: "Sist");
            MoveTable(name: "BTra.FormulariosIniciales", newSchema: "Sist");
            MoveTable(name: "BTra.FormasContacto", newSchema: "Sist");
            MoveTable(name: "Recl.DocumentosDamsa", newSchema: "Sist");
            MoveTable(name: "Recl.DiasObligatorios", newSchema: "Sist");
            MoveTable(name: "Recl.CompetenciasGerenciales", newSchema: "Sist");
            MoveTable(name: "Recl.CompetenciasCardinales", newSchema: "Sist");
            MoveTable(name: "Recl.CompetenciasAreas", newSchema: "Sist");
            MoveTable(name: "Recl.TiposNominas", newSchema: "Sist");
            MoveTable(name: "Recl.TiposPsicometrias", newSchema: "Sist");
            MoveTable(name: "Recl.PsicometriasDamsa", newSchema: "Sist");
            MoveTable(name: "Recl.PsicometriasCliente", newSchema: "Sist");
            MoveTable(name: "Recl.ProcesoPerfil", newSchema: "Sist");
            MoveTable(name: "Recl.PrestacionesClientePerfil", newSchema: "Sist");
            MoveTable(name: "Recl.PeriodosPagos", newSchema: "Sist");
            MoveTable(name: "Recl.ObservacionesPerfil", newSchema: "Sist");
            MoveTable(name: "Recl.HorariosPerfiles", newSchema: "Sist");
            MoveTable(name: "Recl.EscolaridadesPerfil", newSchema: "Sist");
            MoveTable(name: "Recl.DocumentosClientes", newSchema: "Sist");
            MoveTable(name: "Recl.DiasSemana", newSchema: "Sist");
            MoveTable(name: "Recl.TiposContratos", newSchema: "Sist");
            MoveTable(name: "Recl.CompetenciaGerencialPerfil", newSchema: "Sist");
            MoveTable(name: "Recl.CompetenciaCardinalPerfil", newSchema: "Sist");
            MoveTable(name: "Recl.CompetenciaAreaPerfil", newSchema: "Sist");
            MoveTable(name: "Recl.TiposBeneficios", newSchema: "Sist");
            MoveTable(name: "Recl.BeneficiosPerfil", newSchema: "Sist");
            MoveTable(name: "Recl.TiposReclutamientos", newSchema: "Sist");
            MoveTable(name: "Recl.ClasesReclutamientos", newSchema: "Sist");
            MoveTable(name: "Recl.Aptitudes", newSchema: "Sist");
            MoveTable(name: "Recl.AptitudesPerfil", newSchema: "Sist");
            MoveTable(name: "Recl.DAMFO_290", newSchema: "Sist");
            MoveTable(name: "Recl.ActividadesPerfil", newSchema: "Sist");
            MoveTable(name: "BTra.PerfilExperiencia", newSchema: "Sist");
            MoveTable(name: "Recl.EstadosEstudios", newSchema: "Sist");
            MoveTable(name: "BTra.DocumentosValidadores", newSchema: "Sist");
            MoveTable(name: "BTra.Carreras", newSchema: "Sist");
            MoveTable(name: "BTra.Formaciones", newSchema: "Sist");
            MoveTable(name: "Recl.Areas", newSchema: "Sist");
            MoveTable(name: "BTra.ExperienciasProfesionales", newSchema: "Sist");
            MoveTable(name: "BTra.Cursos", newSchema: "Sist");
            MoveTable(name: "BTra.InstitucionesEducativas", newSchema: "Sist");
            MoveTable(name: "BTra.ConocimientosHabilidades", newSchema: "Sist");
            MoveTable(name: "BTra.Certificaciones", newSchema: "Sist");
            MoveTable(name: "BTra.TiposLicencias", newSchema: "Sist");
            MoveTable(name: "BTra.TiposDiscapacidades", newSchema: "Sist");
            MoveTable(name: "Vtas.TiposEmpresas", newSchema: "Sist");
            MoveTable(name: "Vtas.TiposBases", newSchema: "Sist");
            MoveTable(name: "Vtas.TamanosEmpresas", newSchema: "Sist");
            MoveTable(name: "Vtas.Agencias", newSchema: "Sist");
            MoveTable(name: "Vtas.ActividadEmpresas", newSchema: "Sist");
            MoveTable(name: "Vtas.Referenciados", newSchema: "Sist");
            MoveTable(name: "Vtas.Contactos", newSchema: "Sist");
            MoveTable(name: "Vtas.Clientes", newSchema: "Sist");
            MoveTable(name: "BTra.Candidatos", newSchema: "Sist");
            MoveTable(name: "BTra.PerfilCandidato", newSchema: "Sist");
            MoveTable(name: "BTra.AreasInteres", newSchema: "Sist");
            MoveTable(name: "BTra.AreasExperiencia", newSchema: "Sist");
            MoveTable(name: "BTra.AcercaDeMi", newSchema: "Sist");
        }
    }
}
