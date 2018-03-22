namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class FirstMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Sist.AcercaDeMi",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    AcercaDeMi = c.String(),
                    PuestoDeseado = c.String(),
                    SalarioAceptable = c.Decimal(nullable: false, precision: 18, scale: 2),
                    SalarioDeseado = c.Decimal(nullable: false, precision: 18, scale: 2),
                    AreaExperienciaId = c.Int(nullable: false),
                    AreaInteresId = c.Int(),
                    PerfilExperienciaId = c.Int(),
                    PerfilCandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.AreasExperiencia", t => t.AreaExperienciaId, cascadeDelete: false)
                .ForeignKey("Sist.AreasInteres", t => t.AreaInteresId)
                .ForeignKey("Sist.PerfilCandidato", t => t.PerfilCandidatoId, cascadeDelete: true)
                .ForeignKey("Sist.PerfilExperiencia", t => t.PerfilExperienciaId)
                .Index(t => t.AreaExperienciaId)
                .Index(t => t.AreaInteresId)
                .Index(t => t.PerfilExperienciaId)
                .Index(t => t.PerfilCandidatoId);

            CreateTable(
                "Sist.AreasExperiencia",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    areaExperiencia = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.AreasInteres",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    areaInteres = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.PerfilCandidato",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    CandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Candidatos", t => t.CandidatoId)
                .Index(t => t.CandidatoId);

            CreateTable(
                "Sist.Personas",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Nombre = c.String(nullable: false, maxLength: 50),
                    ApellidoPaterno = c.String(nullable: false, maxLength: 50),
                    ApellidoMaterno = c.String(nullable: false, maxLength: 50),
                    FechaNacimiento = c.DateTime(storeType: "date"),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.Direcciones",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    TipoDireccionId = c.Int(nullable: false),
                    esMoral = c.Boolean(nullable: false),
                    Calle = c.String(nullable: false, maxLength: 100),
                    NumeroInterior = c.String(maxLength: 10),
                    NumeroExterior = c.String(maxLength: 10),
                    PaisId = c.Int(nullable: false),
                    EstadoId = c.Int(nullable: false),
                    MunicipioId = c.Int(nullable: false),
                    ColoniaId = c.Int(nullable: false),
                    CodigoPostal = c.String(nullable: false, maxLength: 15),
                    esPrincipal = c.Boolean(nullable: false),
                    Activo = c.Boolean(nullable: false),
                    Referencia = c.String(maxLength: 500),
                    PersonaId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Colonias", t => t.ColoniaId, cascadeDelete: false)
                .ForeignKey("Sist.Estados", t => t.EstadoId, cascadeDelete: false)
                .ForeignKey("Sist.Municipios", t => t.MunicipioId, cascadeDelete: false)
                .ForeignKey("Sist.Paises", t => t.PaisId, cascadeDelete: false)
                .ForeignKey("Sist.Personas", t => t.PersonaId, cascadeDelete: false)
                .ForeignKey("Sist.TiposDirecciones", t => t.TipoDireccionId, cascadeDelete: false)
                .Index(t => t.TipoDireccionId)
                .Index(t => t.PaisId)
                .Index(t => t.EstadoId)
                .Index(t => t.MunicipioId)
                .Index(t => t.ColoniaId)
                .Index(t => t.PersonaId);

            CreateTable(
                "Sist.Colonias",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    colonia = c.String(nullable: false, maxLength: 100),
                    CP = c.String(nullable: false, maxLength: 13),
                    TipoColonia = c.String(maxLength: 50),
                    MunicipioId = c.Int(nullable: false),
                    EstadoId = c.Int(nullable: false),
                    PaisId = c.Int(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Estados", t => t.EstadoId, cascadeDelete: false)
                .ForeignKey("Sist.Municipios", t => t.MunicipioId, cascadeDelete: false)
                .ForeignKey("Sist.Paises", t => t.PaisId, cascadeDelete: false)
                .Index(t => t.MunicipioId)
                .Index(t => t.EstadoId)
                .Index(t => t.PaisId);

            CreateTable(
                "Sist.Estados",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    estado = c.String(nullable: false, maxLength: 100),
                    PaisId = c.Int(nullable: false),
                    Clave = c.String(),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Paises", t => t.PaisId, cascadeDelete: true)
                .Index(t => t.PaisId);

            CreateTable(
                "Sist.Paises",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    pais = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.Municipios",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    municipio = c.String(nullable: false, maxLength: 100),
                    EstadoId = c.Int(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Estados", t => t.EstadoId, cascadeDelete: false)
                .Index(t => t.EstadoId);

            CreateTable(
                "Sist.Emails",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    email = c.String(nullable: false, maxLength: 100),
                    esPrincipal = c.Boolean(nullable: false),
                    PersonaId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.PersonaId, cascadeDelete: false)
                .Index(t => t.PersonaId);

            CreateTable(
                "Sist.Telefonos",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    ClavePais = c.String(nullable: false, maxLength: 5),
                    ClaveLada = c.String(maxLength: 5),
                    Extension = c.String(maxLength: 10),
                    telefono = c.String(nullable: false, maxLength: 15),
                    TipoTelefonoId = c.Byte(nullable: false),
                    Activo = c.Boolean(nullable: false),
                    esPrincipal = c.Boolean(nullable: false),
                    PersonaId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.PersonaId, cascadeDelete: false)
                .ForeignKey("Sist.TiposTelefonos", t => t.TipoTelefonoId, cascadeDelete: false)
                .Index(t => t.TipoTelefonoId)
                .Index(t => t.PersonaId);

            CreateTable(
                "Sist.TiposTelefonos",
                c => new
                {
                    Id = c.Byte(nullable: false, identity: true),
                    Tipo = c.String(nullable: false, maxLength: 15),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.ActividadEmpresas",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    GiroEmpresaId = c.Int(nullable: false),
                    actividadEmpresa = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.GiroEmpresas", t => t.GiroEmpresaId, cascadeDelete: false)
                .Index(t => t.GiroEmpresaId);

            CreateTable(
                "Sist.GiroEmpresas",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    giroEmpresa = c.String(nullable: false, maxLength: 15),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TamanosEmpresas",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tamanoEmpresa = c.String(nullable: false, maxLength: 30),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TiposBases",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tipoBase = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TiposEmpresas",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tipoEmpresa = c.String(nullable: false, maxLength: 20),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TiposDirecciones",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tipoDireccion = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.EstadosCiviles",
                c => new
                {
                    Id = c.Byte(nullable: false, identity: true),
                    estadoCivil = c.String(nullable: false, maxLength: 20),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.Generos",
                c => new
                {
                    Id = c.Byte(nullable: false, identity: true),
                    genero = c.String(nullable: false, maxLength: 15),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TiposDiscapacidades",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tipoDiscapacidad = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TiposLicencias",
                c => new
                {
                    Id = c.Byte(nullable: false, identity: true),
                    tipoLicencia = c.String(),
                    Descripcion = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.Certificaciones",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    certificacion = c.String(),
                    AutoridadEmisora = c.String(),
                    Licencia = c.String(),
                    UrlCertificacion = c.String(),
                    noVence = c.Boolean(nullable: false),
                    YearInicioId = c.Int(nullable: false),
                    MonthInicioId = c.Int(nullable: false),
                    YearTerminoId = c.Int(nullable: false),
                    MonthTerminoId = c.Int(nullable: false),
                    PerfilCandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Months", t => t.MonthInicioId, cascadeDelete: false)
                .ForeignKey("Sist.Months", t => t.MonthTerminoId, cascadeDelete: false)
                .ForeignKey("Sist.PerfilCandidato", t => t.PerfilCandidatoId, cascadeDelete: true)
                .ForeignKey("Sist.Years", t => t.YearInicioId, cascadeDelete: false)
                .ForeignKey("Sist.Years", t => t.YearTerminoId, cascadeDelete: false)
                .Index(t => t.YearInicioId)
                .Index(t => t.MonthInicioId)
                .Index(t => t.YearTerminoId)
                .Index(t => t.MonthTerminoId)
                .Index(t => t.PerfilCandidatoId);

            CreateTable(
                "Sist.Months",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    month = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.Years",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    year = c.Int(nullable: false),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.ConocimientosHabilidades",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Conocimiento = c.String(),
                    Herramienta = c.String(),
                    InstitucionEducativaId = c.Guid(),
                    NivelId = c.Byte(),
                    PerfilCandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.InstitucionesEducativas", t => t.InstitucionEducativaId)
                .ForeignKey("Sist.Niveles", t => t.NivelId)
                .ForeignKey("Sist.PerfilCandidato", t => t.PerfilCandidatoId, cascadeDelete: true)
                .Index(t => t.InstitucionEducativaId)
                .Index(t => t.NivelId)
                .Index(t => t.PerfilCandidatoId);

            CreateTable(
                "Sist.InstitucionesEducativas",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    institucionEducativa = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.Niveles",
                c => new
                {
                    Id = c.Byte(nullable: false, identity: true),
                    nivel = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.Cursos",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    curso = c.String(),
                    InstitucionEducativaId = c.Guid(nullable: false),
                    YearInicioId = c.Int(),
                    MonthInicioId = c.Int(),
                    YearTerminoId = c.Int(),
                    MonthTerminoId = c.Int(),
                    PerfilCandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.InstitucionesEducativas", t => t.InstitucionEducativaId, cascadeDelete: false)
                .ForeignKey("Sist.Months", t => t.MonthInicioId)
                .ForeignKey("Sist.Months", t => t.MonthTerminoId)
                .ForeignKey("Sist.PerfilCandidato", t => t.PerfilCandidatoId, cascadeDelete: true)
                .ForeignKey("Sist.Years", t => t.YearInicioId)
                .ForeignKey("Sist.Years", t => t.YearTerminoId)
                .Index(t => t.InstitucionEducativaId)
                .Index(t => t.YearInicioId)
                .Index(t => t.MonthInicioId)
                .Index(t => t.YearTerminoId)
                .Index(t => t.MonthTerminoId)
                .Index(t => t.PerfilCandidatoId);

            CreateTable(
                "Sist.ExperienciasProfesionales",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Empresa = c.String(),
                    GiroEmpresaId = c.Int(nullable: false),
                    CargoAsignado = c.String(),
                    AreaId = c.Int(nullable: false),
                    YearInicioId = c.Int(nullable: false),
                    MonthInicioId = c.Int(nullable: false),
                    YearTerminoId = c.Int(nullable: false),
                    MonthTerminoId = c.Int(nullable: false),
                    Salario = c.Decimal(nullable: false, precision: 18, scale: 2),
                    TrabajoActual = c.Boolean(nullable: false),
                    Descripcion = c.String(),
                    PerfilCandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Areas", t => t.AreaId, cascadeDelete: false)
                .ForeignKey("Sist.GiroEmpresas", t => t.GiroEmpresaId, cascadeDelete: false)
                .ForeignKey("Sist.Months", t => t.MonthInicioId, cascadeDelete: false)
                .ForeignKey("Sist.Months", t => t.MonthTerminoId, cascadeDelete: false)
                .ForeignKey("Sist.PerfilCandidato", t => t.PerfilCandidatoId, cascadeDelete: true)
                .ForeignKey("Sist.Years", t => t.YearInicioId, cascadeDelete: false)
                .ForeignKey("Sist.Years", t => t.YearTerminoId, cascadeDelete: false)
                .Index(t => t.GiroEmpresaId)
                .Index(t => t.AreaId)
                .Index(t => t.YearInicioId)
                .Index(t => t.MonthInicioId)
                .Index(t => t.YearTerminoId)
                .Index(t => t.MonthTerminoId)
                .Index(t => t.PerfilCandidatoId);

            CreateTable(
                "Sist.Areas",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    Nombre = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.Formaciones",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    InstitucionEducativaId = c.Guid(nullable: false),
                    GradoEstudioId = c.Int(nullable: false),
                    EstadoEstudioId = c.Int(nullable: false),
                    DocumentoValidadorId = c.Int(nullable: false),
                    CarreraId = c.Guid(nullable: false),
                    YearInicioId = c.Int(nullable: false),
                    MonthInicioId = c.Int(nullable: false),
                    YearTerminoId = c.Int(nullable: false),
                    MonthTerminoId = c.Int(nullable: false),
                    PerfilCandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Carreras", t => t.CarreraId, cascadeDelete: false)
                .ForeignKey("Sist.DocumentosValidadores", t => t.DocumentoValidadorId, cascadeDelete: false)
                .ForeignKey("Sist.EstadosEstudios", t => t.EstadoEstudioId, cascadeDelete: false)
                .ForeignKey("Sist.GradosEstudios", t => t.GradoEstudioId, cascadeDelete: false)
                .ForeignKey("Sist.InstitucionesEducativas", t => t.InstitucionEducativaId, cascadeDelete: false)
                .ForeignKey("Sist.Months", t => t.MonthInicioId, cascadeDelete: false)
                .ForeignKey("Sist.Months", t => t.MonthTerminoId, cascadeDelete: false)
                .ForeignKey("Sist.PerfilCandidato", t => t.PerfilCandidatoId, cascadeDelete: true)
                .ForeignKey("Sist.Years", t => t.YearInicioId, cascadeDelete: false)
                .ForeignKey("Sist.Years", t => t.YearTerminoId, cascadeDelete: false)
                .Index(t => t.InstitucionEducativaId)
                .Index(t => t.GradoEstudioId)
                .Index(t => t.EstadoEstudioId)
                .Index(t => t.DocumentoValidadorId)
                .Index(t => t.CarreraId)
                .Index(t => t.YearInicioId)
                .Index(t => t.MonthInicioId)
                .Index(t => t.YearTerminoId)
                .Index(t => t.MonthTerminoId)
                .Index(t => t.PerfilCandidatoId);

            CreateTable(
                "Sist.Carreras",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    carrera = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.DocumentosValidadores",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    documentoValidador = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.EstadosEstudios",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    estadoEstudio = c.String(nullable: false, maxLength: 15),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.GradosEstudios",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    gradoEstudio = c.String(nullable: false, maxLength: 15),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.PerfilIdiomas",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    IdiomaId = c.Int(nullable: false),
                    NivelId = c.Byte(nullable: false),
                    PerfilCandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Idiomas", t => t.IdiomaId, cascadeDelete: false)
                .ForeignKey("Sist.Niveles", t => t.NivelId, cascadeDelete: false)
                .ForeignKey("Sist.PerfilCandidato", t => t.PerfilCandidatoId, cascadeDelete: true)
                .Index(t => t.IdiomaId)
                .Index(t => t.NivelId)
                .Index(t => t.PerfilCandidatoId);

            CreateTable(
                "Sist.Idiomas",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    idioma = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.PerfilExperiencia",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    perfilExperiencia = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.ActividadesPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Actividades = c.String(nullable: false, maxLength: 200, unicode: false),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.DAMFO_290",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    ClienteId = c.Guid(nullable: false),
                    TipoReclutamientoId = c.Int(nullable: false),
                    ClaseReclutamientoId = c.Int(nullable: false),
                    NombrePerfil = c.String(),
                    SexoId = c.Int(nullable: false),
                    MyProperty = c.Int(nullable: false),
                    EdadMinima = c.Int(nullable: false),
                    EdadMaxima = c.Int(nullable: false),
                    EstadoCivilId = c.Int(nullable: false),
                    NivelId = c.Int(nullable: false),
                    AreaId = c.Int(nullable: false),
                    Experiencia = c.Int(nullable: false),
                    SueldoMinimo = c.Single(nullable: false),
                    SueldoMaximo = c.Single(nullable: false),
                    DiasCorteId = c.Int(nullable: false),
                    TipoNominaId = c.Int(nullable: false),
                    DiasPagoId = c.Int(nullable: false),
                    PeriodoPagoId = c.Int(nullable: false),
                    ContratoInicialId = c.Int(nullable: false),
                    ContratoFinalId = c.Int(nullable: false),
                    DireccionId_Id = c.Guid(),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Direcciones", t => t.DireccionId_Id)
                .Index(t => t.DireccionId_Id);

            CreateTable(
                "Sist.BeneficiosPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    TipoBeneficioId = c.Guid(nullable: false),
                    DAMFO290Id = c.Guid(nullable: false),
                    Cantidad = c.Single(nullable: false),
                    Observaciones = c.String(maxLength: 500, unicode: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.CompetenciaCardinalPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    CompetenciaId = c.Int(nullable: false),
                    Nivel = c.String(nullable: false, maxLength: 5),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.CompetenciaAreaPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    CompetenciaId = c.Int(nullable: false),
                    Nivel = c.String(nullable: false, maxLength: 5),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.CompetenciaGerencialPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    CompetenciaId = c.Int(nullable: false),
                    Nivel = c.String(nullable: false, maxLength: 5),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.ContactoPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    ContactoId = c.Guid(nullable: false),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Contactos", t => t.ContactoId)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.ContactoId)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.DocumentosClientes",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Documento = c.String(),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.EscolaridadesPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Escolaridad = c.String(nullable: false, maxLength: 100, unicode: false),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.HorariosPerfiles",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
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
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.ObservacionesPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Observaciones = c.String(nullable: false, maxLength: 100, unicode: false),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.AptitudesPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Aptitudes = c.String(nullable: false, maxLength: 50),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.PrestacionesClientePerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Prestamo = c.String(nullable: false, maxLength: 100, unicode: false),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.ProcesoPerfils",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Proceso = c.String(),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.PsicometriasClientes",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Psicometria = c.String(),
                    Descripcion = c.String(),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.PsicometriasDamsas",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    PsicometriaId = c.Guid(nullable: false),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.RutasPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    DireccionId = c.Guid(nullable: false),
                    Ruta = c.String(nullable: false, maxLength: 100, unicode: false),
                    Via = c.String(maxLength: 100, unicode: false),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.TelefonoPerfil",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    telefonoId = c.Guid(nullable: false),
                    DAMFO290Id = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.DAMFO_290", t => t.DAMFO290Id, cascadeDelete: false)
                .ForeignKey("Sist.Telefonos", t => t.telefonoId, cascadeDelete: false)
                .Index(t => t.telefonoId)
                .Index(t => t.DAMFO290Id);

            CreateTable(
                "Sist.Agencias",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    PersonaId = c.Guid(nullable: false),
                    agencia = c.String(nullable: false, maxLength: 50),
                    DesdeCuendo = c.DateTime(nullable: false, storeType: "date"),
                    Empleado = c.Decimal(nullable: false, precision: 5, scale: 2),
                    Cobro = c.Decimal(nullable: false, precision: 5, scale: 2),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.PersonaId, cascadeDelete: false)
                .Index(t => t.PersonaId);

            CreateTable(
                "Sist.Aptitudes",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    aptitud = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.PerfilReclutamientoes",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
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
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Aptitudes", t => t.AptitudId, cascadeDelete: false)
                .ForeignKey("Sist.ClasesReclutamientos", t => t.ClaseReclutamientoId, cascadeDelete: false)
                .ForeignKey("Sist.Clientes", t => t.ClienteId)
                .ForeignKey("Sist.EstadosCiviles", t => t.EstadoCivilId, cascadeDelete: false)
                .ForeignKey("Sist.EstadosEstudios", t => t.EstadoEstudioId, cascadeDelete: false)
                .ForeignKey("Sist.Generos", t => t.GeneroId, cascadeDelete: false)
                .ForeignKey("Sist.TiposReclutamientos", t => t.TipoReclutamientoId, cascadeDelete: false)
                .Index(t => t.ClienteId)
                .Index(t => t.TipoReclutamientoId)
                .Index(t => t.ClaseReclutamientoId)
                .Index(t => t.GeneroId)
                .Index(t => t.EstadoCivilId)
                .Index(t => t.EstadoEstudioId)
                .Index(t => t.AptitudId);

            CreateTable(
                "Sist.ClasesReclutamientos",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    clasesReclutamiento = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TiposReclutamientos",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tipoReclutamiento = c.String(nullable: false, maxLength: 20),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.CandidatoConocimientoInformatico",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    ConocimientoInformaticoId = c.Guid(nullable: false),
                    PorcentageId = c.Int(nullable: false),
                    CandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.ConocimientosInformaticos", t => t.ConocimientoInformaticoId, cascadeDelete: false)
                .ForeignKey("Sist.Porcentages", t => t.PorcentageId, cascadeDelete: false)
                .Index(t => t.ConocimientoInformaticoId)
                .Index(t => t.PorcentageId);

            CreateTable(
                "Sist.ConocimientosInformaticos",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Nombre = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.Porcentages",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    porcentage = c.String(),
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
                "Sist.CompetenciasAreas",
                c => new
                {
                    id = c.Int(nullable: false, identity: true),
                    competenciaArea = c.String(nullable: false, maxLength: 100),
                })
                .PrimaryKey(t => t.id);

            CreateTable(
                "Sist.CompetenciasCardinales",
                c => new
                {
                    id = c.Int(nullable: false, identity: true),
                    competenciaCardinal = c.String(nullable: false, maxLength: 100),
                })
                .PrimaryKey(t => t.id);

            CreateTable(
                "Sist.CompetenciasGerenciales",
                c => new
                {
                    id = c.Int(nullable: false, identity: true),
                    competenciaGerencial = c.String(nullable: false, maxLength: 100),
                })
                .PrimaryKey(t => t.id);

            CreateTable(
                "Sist.DiasObligatorios",
                c => new
                {
                    id = c.Int(nullable: false, identity: true),
                    diaObligatorio = c.String(nullable: false, maxLength: 100),
                })
                .PrimaryKey(t => t.id);

            CreateTable(
                "Sist.DiasSemana",
                c => new
                {
                    Id = c.Byte(nullable: false, identity: true),
                    diaSemana = c.String(nullable: false, maxLength: 15),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.DocumentosDamsa",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    documentoDamsa = c.String(nullable: false, maxLength: 100),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.FormasContacto",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    CandidatoId = c.Guid(nullable: false),
                    CorreoElectronico = c.Boolean(nullable: false),
                    Celular = c.Boolean(nullable: false),
                    WhatsApp = c.Boolean(nullable: false),
                    TelLocal = c.Boolean(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Candidatos", t => t.CandidatoId)
                .Index(t => t.CandidatoId);

            CreateTable(
                "Sist.FormulariosIniciales",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Paso1 = c.Boolean(nullable: false),
                    Paso2 = c.Boolean(nullable: false),
                    Paso3 = c.Boolean(nullable: false),
                    CandidatoId = c.Guid(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Candidatos", t => t.CandidatoId)
                .Index(t => t.CandidatoId);

            CreateTable(
                "Sist.PerfilesProfesionales",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    CargoId = c.Int(nullable: false),
                    AreaId = c.Int(nullable: false),
                    Descripcion = c.String(),
                    PuestoDeseado = c.String(),
                    Salario = c.Decimal(nullable: false, precision: 18, scale: 2),
                    CandidatoId = c.Guid(nullable: false),
                    SitioWeb = c.String(),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Areas", t => t.AreaId, cascadeDelete: false)
                .ForeignKey("Sist.Cargos", t => t.CargoId, cascadeDelete: false)
                .Index(t => t.CargoId)
                .Index(t => t.AreaId);

            CreateTable(
                "Sist.PeriodosPagos",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    periodoPago = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.PrestacionesLey",
                c => new
                {
                    id = c.Int(nullable: false, identity: true),
                    prestacionLey = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.id);

            CreateTable(
                "Sist.RedesSociales",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    TipoRedSocialId = c.Byte(nullable: false),
                    redSocial = c.String(nullable: false, maxLength: 100),
                    PersonaId = c.Guid(),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.PersonaId)
                .ForeignKey("Sist.TiposRedesSociales", t => t.TipoRedSocialId, cascadeDelete: false)
                .Index(t => t.TipoRedSocialId)
                .Index(t => t.PersonaId);

            CreateTable(
                "Sist.TiposRedesSociales",
                c => new
                {
                    Id = c.Byte(nullable: false, identity: true),
                    tipoRedSocial = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.IdentityRoles",
                c => new
                {
                    Id = c.String(nullable: false, maxLength: 128),
                    Name = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.IdentityUserRoles",
                c => new
                {
                    RoleId = c.String(nullable: false, maxLength: 128),
                    UserId = c.String(nullable: false, maxLength: 128),
                    IdentityRole_Id = c.String(maxLength: 128),
                    ApplicationUser_Id = c.String(maxLength: 128),
                })
                .PrimaryKey(t => new { t.RoleId, t.UserId })
                .ForeignKey("Sist.IdentityRoles", t => t.IdentityRole_Id)
                .ForeignKey("Sist.ApplicationUsers", t => t.ApplicationUser_Id)
                .Index(t => t.IdentityRole_Id)
                .Index(t => t.ApplicationUser_Id);

            CreateTable(
                "Sist.TiposBeneficios",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tipoBeneficio = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TiposContratos",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tipoContrato = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TiposNominas",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tipoDeNomina = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.TiposPsicometrias",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    tipoPsicometria = c.String(nullable: false, maxLength: 50),
                    descripcion = c.String(nullable: false, maxLength: 50),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.ApplicationUsers",
                c => new
                {
                    Id = c.String(nullable: false, maxLength: 128),
                    Email = c.String(),
                    EmailConfirmed = c.Boolean(nullable: false),
                    PasswordHash = c.String(),
                    SecurityStamp = c.String(),
                    PhoneNumber = c.String(),
                    PhoneNumberConfirmed = c.Boolean(nullable: false),
                    TwoFactorEnabled = c.Boolean(nullable: false),
                    LockoutEndDateUtc = c.DateTime(),
                    LockoutEnabled = c.Boolean(nullable: false),
                    AccessFailedCount = c.Int(nullable: false),
                    UserName = c.String(),
                })
                .PrimaryKey(t => t.Id);

            CreateTable(
                "Sist.IdentityUserClaims",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    UserId = c.String(),
                    ClaimType = c.String(),
                    ClaimValue = c.String(),
                    ApplicationUser_Id = c.String(maxLength: 128),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.ApplicationUsers", t => t.ApplicationUser_Id)
                .Index(t => t.ApplicationUser_Id);

            CreateTable(
                "Sist.IdentityUserLogins",
                c => new
                {
                    UserId = c.String(nullable: false, maxLength: 128),
                    LoginProvider = c.String(),
                    ProviderKey = c.String(),
                    ApplicationUser_Id = c.String(maxLength: 128),
                })
                .PrimaryKey(t => t.UserId)
                .ForeignKey("Sist.ApplicationUsers", t => t.ApplicationUser_Id)
                .Index(t => t.ApplicationUser_Id);

            CreateTable(
                "Sist.Candidatos",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    PaisNacimientoId = c.Int(nullable: false),
                    EstadoNacimientoId = c.Int(),
                    MunicipioNacimientoId = c.Int(),
                    CodigoPostal = c.String(),
                    GeneroId = c.Byte(nullable: false),
                    EstadoCivilId = c.Byte(),
                    esDiscapacitado = c.Boolean(nullable: false),
                    TipoDiscapacidadId = c.Int(),
                    tieneLicenciaConducir = c.Boolean(nullable: false),
                    TipoLicenciaId = c.Byte(),
                    tieneVehiculoPropio = c.Boolean(nullable: false),
                    puedeViajar = c.Boolean(nullable: false),
                    puedeRehubicarse = c.Boolean(nullable: false),
                    CURP = c.String(),
                    RFC = c.String(),
                    NSS = c.String(),
                    ImgProfileUrl = c.String(),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.Id)
                .ForeignKey("Sist.Paises", t => t.PaisNacimientoId, cascadeDelete: false)
                .ForeignKey("Sist.Estados", t => t.EstadoNacimientoId)
                .ForeignKey("Sist.Municipios", t => t.MunicipioNacimientoId)
                .ForeignKey("Sist.Generos", t => t.GeneroId, cascadeDelete: false)
                .ForeignKey("Sist.EstadosCiviles", t => t.EstadoCivilId)
                .ForeignKey("Sist.TiposDiscapacidades", t => t.TipoDiscapacidadId)
                .ForeignKey("Sist.TiposLicencias", t => t.TipoLicenciaId)
                .Index(t => t.Id)
                .Index(t => t.PaisNacimientoId)
                .Index(t => t.EstadoNacimientoId)
                .Index(t => t.MunicipioNacimientoId)
                .Index(t => t.GeneroId)
                .Index(t => t.EstadoCivilId)
                .Index(t => t.TipoDiscapacidadId)
                .Index(t => t.TipoLicenciaId);

            CreateTable(
                "Sist.Clientes",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    RazonSocial = c.String(maxLength: 100),
                    Nombrecomercial = c.String(maxLength: 500),
                    RFC = c.String(maxLength: 15),
                    GiroEmpresaId = c.Int(nullable: false),
                    ActividadEmpresaId = c.Int(nullable: false),
                    TamanoEmpresaId = c.Int(nullable: false),
                    TipoEmpresaId = c.Int(nullable: false),
                    TipoBaseId = c.Int(nullable: false),
                    otraAgencia = c.Boolean(nullable: false),
                    esCliente = c.Boolean(nullable: false),
                    Clasificacion = c.String(nullable: false, maxLength: 10),
                    NumeroEmpleados = c.Int(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.Id)
                .ForeignKey("Sist.GiroEmpresas", t => t.GiroEmpresaId, cascadeDelete: false)
                .ForeignKey("Sist.ActividadEmpresas", t => t.ActividadEmpresaId, cascadeDelete: false)
                .ForeignKey("Sist.TamanosEmpresas", t => t.TamanoEmpresaId, cascadeDelete: false)
                .ForeignKey("Sist.TiposEmpresas", t => t.TipoEmpresaId, cascadeDelete: false)
                .ForeignKey("Sist.TiposBases", t => t.TipoBaseId, cascadeDelete: false)
                .Index(t => t.Id)
                .Index(t => t.GiroEmpresaId)
                .Index(t => t.ActividadEmpresaId)
                .Index(t => t.TamanoEmpresaId)
                .Index(t => t.TipoEmpresaId)
                .Index(t => t.TipoBaseId);

            CreateTable(
                "Sist.Contactos",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Puesto = c.String(nullable: false, maxLength: 100),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.Id)
                .Index(t => t.Id);

            CreateTable(
                "Sist.Referenciados",
                c => new
                {
                    Id = c.Guid(nullable: false, identity: true),
                    Puesto = c.String(nullable: false, maxLength: 100),
                    DAL = c.String(nullable: false, maxLength: 100),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Sist.Personas", t => t.Id)
                .Index(t => t.Id);

        }

        public override void Down()
        {
            DropForeignKey("Sist.Referenciados", "Id", "Sist.Personas");
            DropForeignKey("Sist.Contactos", "Id", "Sist.Personas");
            DropForeignKey("Sist.Clientes", "TipoBaseId", "Sist.TiposBases");
            DropForeignKey("Sist.Clientes", "TipoEmpresaId", "Sist.TiposEmpresas");
            DropForeignKey("Sist.Clientes", "TamanoEmpresaId", "Sist.TamanosEmpresas");
            DropForeignKey("Sist.Clientes", "ActividadEmpresaId", "Sist.ActividadEmpresas");
            DropForeignKey("Sist.Clientes", "GiroEmpresaId", "Sist.GiroEmpresas");
            DropForeignKey("Sist.Clientes", "Id", "Sist.Personas");
            DropForeignKey("Sist.Candidatos", "TipoLicenciaId", "Sist.TiposLicencias");
            DropForeignKey("Sist.Candidatos", "TipoDiscapacidadId", "Sist.TiposDiscapacidades");
            DropForeignKey("Sist.Candidatos", "EstadoCivilId", "Sist.EstadosCiviles");
            DropForeignKey("Sist.Candidatos", "GeneroId", "Sist.Generos");
            DropForeignKey("Sist.Candidatos", "MunicipioNacimientoId", "Sist.Municipios");
            DropForeignKey("Sist.Candidatos", "EstadoNacimientoId", "Sist.Estados");
            DropForeignKey("Sist.Candidatos", "PaisNacimientoId", "Sist.Paises");
            DropForeignKey("Sist.Candidatos", "Id", "Sist.Personas");
            DropForeignKey("Sist.IdentityUserRoles", "ApplicationUser_Id", "Sist.ApplicationUsers");
            DropForeignKey("Sist.IdentityUserLogins", "ApplicationUser_Id", "Sist.ApplicationUsers");
            DropForeignKey("Sist.IdentityUserClaims", "ApplicationUser_Id", "Sist.ApplicationUsers");
            DropForeignKey("Sist.IdentityUserRoles", "IdentityRole_Id", "Sist.IdentityRoles");
            DropForeignKey("Sist.RedesSociales", "TipoRedSocialId", "Sist.TiposRedesSociales");
            DropForeignKey("Sist.RedesSociales", "PersonaId", "Sist.Personas");
            DropForeignKey("Sist.PerfilesProfesionales", "CargoId", "Sist.Cargos");
            DropForeignKey("Sist.PerfilesProfesionales", "AreaId", "Sist.Areas");
            DropForeignKey("Sist.FormulariosIniciales", "CandidatoId", "Sist.Candidatos");
            DropForeignKey("Sist.FormasContacto", "CandidatoId", "Sist.Candidatos");
            DropForeignKey("Sist.CandidatoConocimientoInformatico", "PorcentageId", "Sist.Porcentages");
            DropForeignKey("Sist.CandidatoConocimientoInformatico", "ConocimientoInformaticoId", "Sist.ConocimientosInformaticos");
            DropForeignKey("Sist.PerfilReclutamientoes", "TipoReclutamientoId", "Sist.TiposReclutamientos");
            DropForeignKey("Sist.PerfilReclutamientoes", "GeneroId", "Sist.Generos");
            DropForeignKey("Sist.PerfilReclutamientoes", "EstadoEstudioId", "Sist.EstadosEstudios");
            DropForeignKey("Sist.PerfilReclutamientoes", "EstadoCivilId", "Sist.EstadosCiviles");
            DropForeignKey("Sist.PerfilReclutamientoes", "ClienteId", "Sist.Clientes");
            DropForeignKey("Sist.PerfilReclutamientoes", "ClaseReclutamientoId", "Sist.ClasesReclutamientos");
            DropForeignKey("Sist.PerfilReclutamientoes", "AptitudId", "Sist.Aptitudes");
            DropForeignKey("Sist.Agencias", "PersonaId", "Sist.Personas");
            DropForeignKey("Sist.TelefonoPerfil", "telefonoId", "Sist.Telefonos");
            DropForeignKey("Sist.TelefonoPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.RutasPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.PsicometriasDamsas", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.PsicometriasClientes", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.ProcesoPerfils", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.PrestacionesClientePerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.AptitudesPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.ObservacionesPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.HorariosPerfiles", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.EscolaridadesPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.DocumentosClientes", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.DAMFO_290", "DireccionId_Id", "Sist.Direcciones");
            DropForeignKey("Sist.ContactoPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.ContactoPerfil", "ContactoId", "Sist.Contactos");
            DropForeignKey("Sist.CompetenciaGerencialPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.CompetenciaAreaPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.CompetenciaCardinalPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.BeneficiosPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.ActividadesPerfil", "DAMFO290Id", "Sist.DAMFO_290");
            DropForeignKey("Sist.AcercaDeMi", "PerfilExperienciaId", "Sist.PerfilExperiencia");
            DropForeignKey("Sist.PerfilIdiomas", "PerfilCandidatoId", "Sist.PerfilCandidato");
            DropForeignKey("Sist.PerfilIdiomas", "NivelId", "Sist.Niveles");
            DropForeignKey("Sist.PerfilIdiomas", "IdiomaId", "Sist.Idiomas");
            DropForeignKey("Sist.Formaciones", "YearTerminoId", "Sist.Years");
            DropForeignKey("Sist.Formaciones", "YearInicioId", "Sist.Years");
            DropForeignKey("Sist.Formaciones", "PerfilCandidatoId", "Sist.PerfilCandidato");
            DropForeignKey("Sist.Formaciones", "MonthTerminoId", "Sist.Months");
            DropForeignKey("Sist.Formaciones", "MonthInicioId", "Sist.Months");
            DropForeignKey("Sist.Formaciones", "InstitucionEducativaId", "Sist.InstitucionesEducativas");
            DropForeignKey("Sist.Formaciones", "GradoEstudioId", "Sist.GradosEstudios");
            DropForeignKey("Sist.Formaciones", "EstadoEstudioId", "Sist.EstadosEstudios");
            DropForeignKey("Sist.Formaciones", "DocumentoValidadorId", "Sist.DocumentosValidadores");
            DropForeignKey("Sist.Formaciones", "CarreraId", "Sist.Carreras");
            DropForeignKey("Sist.ExperienciasProfesionales", "YearTerminoId", "Sist.Years");
            DropForeignKey("Sist.ExperienciasProfesionales", "YearInicioId", "Sist.Years");
            DropForeignKey("Sist.ExperienciasProfesionales", "PerfilCandidatoId", "Sist.PerfilCandidato");
            DropForeignKey("Sist.ExperienciasProfesionales", "MonthTerminoId", "Sist.Months");
            DropForeignKey("Sist.ExperienciasProfesionales", "MonthInicioId", "Sist.Months");
            DropForeignKey("Sist.ExperienciasProfesionales", "GiroEmpresaId", "Sist.GiroEmpresas");
            DropForeignKey("Sist.ExperienciasProfesionales", "AreaId", "Sist.Areas");
            DropForeignKey("Sist.Cursos", "YearTerminoId", "Sist.Years");
            DropForeignKey("Sist.Cursos", "YearInicioId", "Sist.Years");
            DropForeignKey("Sist.Cursos", "PerfilCandidatoId", "Sist.PerfilCandidato");
            DropForeignKey("Sist.Cursos", "MonthTerminoId", "Sist.Months");
            DropForeignKey("Sist.Cursos", "MonthInicioId", "Sist.Months");
            DropForeignKey("Sist.Cursos", "InstitucionEducativaId", "Sist.InstitucionesEducativas");
            DropForeignKey("Sist.ConocimientosHabilidades", "PerfilCandidatoId", "Sist.PerfilCandidato");
            DropForeignKey("Sist.ConocimientosHabilidades", "NivelId", "Sist.Niveles");
            DropForeignKey("Sist.ConocimientosHabilidades", "InstitucionEducativaId", "Sist.InstitucionesEducativas");
            DropForeignKey("Sist.Certificaciones", "YearTerminoId", "Sist.Years");
            DropForeignKey("Sist.Certificaciones", "YearInicioId", "Sist.Years");
            DropForeignKey("Sist.Certificaciones", "PerfilCandidatoId", "Sist.PerfilCandidato");
            DropForeignKey("Sist.Certificaciones", "MonthTerminoId", "Sist.Months");
            DropForeignKey("Sist.Certificaciones", "MonthInicioId", "Sist.Months");
            DropForeignKey("Sist.PerfilCandidato", "CandidatoId", "Sist.Candidatos");
            DropForeignKey("Sist.Direcciones", "TipoDireccionId", "Sist.TiposDirecciones");
            DropForeignKey("Sist.ActividadEmpresas", "GiroEmpresaId", "Sist.GiroEmpresas");
            DropForeignKey("Sist.Telefonos", "TipoTelefonoId", "Sist.TiposTelefonos");
            DropForeignKey("Sist.Telefonos", "PersonaId", "Sist.Personas");
            DropForeignKey("Sist.Emails", "PersonaId", "Sist.Personas");
            DropForeignKey("Sist.Direcciones", "PersonaId", "Sist.Personas");
            DropForeignKey("Sist.Direcciones", "PaisId", "Sist.Paises");
            DropForeignKey("Sist.Direcciones", "MunicipioId", "Sist.Municipios");
            DropForeignKey("Sist.Direcciones", "EstadoId", "Sist.Estados");
            DropForeignKey("Sist.Direcciones", "ColoniaId", "Sist.Colonias");
            DropForeignKey("Sist.Colonias", "PaisId", "Sist.Paises");
            DropForeignKey("Sist.Colonias", "MunicipioId", "Sist.Municipios");
            DropForeignKey("Sist.Municipios", "EstadoId", "Sist.Estados");
            DropForeignKey("Sist.Colonias", "EstadoId", "Sist.Estados");
            DropForeignKey("Sist.Estados", "PaisId", "Sist.Paises");
            DropForeignKey("Sist.AcercaDeMi", "PerfilCandidatoId", "Sist.PerfilCandidato");
            DropForeignKey("Sist.AcercaDeMi", "AreaInteresId", "Sist.AreasInteres");
            DropForeignKey("Sist.AcercaDeMi", "AreaExperienciaId", "Sist.AreasExperiencia");
            DropIndex("Sist.Referenciados", new[] { "Id" });
            DropIndex("Sist.Contactos", new[] { "Id" });
            DropIndex("Sist.Clientes", new[] { "TipoBaseId" });
            DropIndex("Sist.Clientes", new[] { "TipoEmpresaId" });
            DropIndex("Sist.Clientes", new[] { "TamanoEmpresaId" });
            DropIndex("Sist.Clientes", new[] { "ActividadEmpresaId" });
            DropIndex("Sist.Clientes", new[] { "GiroEmpresaId" });
            DropIndex("Sist.Clientes", new[] { "Id" });
            DropIndex("Sist.Candidatos", new[] { "TipoLicenciaId" });
            DropIndex("Sist.Candidatos", new[] { "TipoDiscapacidadId" });
            DropIndex("Sist.Candidatos", new[] { "EstadoCivilId" });
            DropIndex("Sist.Candidatos", new[] { "GeneroId" });
            DropIndex("Sist.Candidatos", new[] { "MunicipioNacimientoId" });
            DropIndex("Sist.Candidatos", new[] { "EstadoNacimientoId" });
            DropIndex("Sist.Candidatos", new[] { "PaisNacimientoId" });
            DropIndex("Sist.Candidatos", new[] { "Id" });
            DropIndex("Sist.IdentityUserLogins", new[] { "ApplicationUser_Id" });
            DropIndex("Sist.IdentityUserClaims", new[] { "ApplicationUser_Id" });
            DropIndex("Sist.IdentityUserRoles", new[] { "ApplicationUser_Id" });
            DropIndex("Sist.IdentityUserRoles", new[] { "IdentityRole_Id" });
            DropIndex("Sist.RedesSociales", new[] { "PersonaId" });
            DropIndex("Sist.RedesSociales", new[] { "TipoRedSocialId" });
            DropIndex("Sist.PerfilesProfesionales", new[] { "AreaId" });
            DropIndex("Sist.PerfilesProfesionales", new[] { "CargoId" });
            DropIndex("Sist.FormulariosIniciales", new[] { "CandidatoId" });
            DropIndex("Sist.FormasContacto", new[] { "CandidatoId" });
            DropIndex("Sist.CandidatoConocimientoInformatico", new[] { "PorcentageId" });
            DropIndex("Sist.CandidatoConocimientoInformatico", new[] { "ConocimientoInformaticoId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "AptitudId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "EstadoEstudioId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "EstadoCivilId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "GeneroId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "ClaseReclutamientoId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "TipoReclutamientoId" });
            DropIndex("Sist.PerfilReclutamientoes", new[] { "ClienteId" });
            DropIndex("Sist.Agencias", new[] { "PersonaId" });
            DropIndex("Sist.TelefonoPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.TelefonoPerfil", new[] { "telefonoId" });
            DropIndex("Sist.RutasPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.PsicometriasDamsas", new[] { "DAMFO290Id" });
            DropIndex("Sist.PsicometriasClientes", new[] { "DAMFO290Id" });
            DropIndex("Sist.ProcesoPerfils", new[] { "DAMFO290Id" });
            DropIndex("Sist.PrestacionesClientePerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.AptitudesPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.ObservacionesPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.HorariosPerfiles", new[] { "DAMFO290Id" });
            DropIndex("Sist.EscolaridadesPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.DocumentosClientes", new[] { "DAMFO290Id" });
            DropIndex("Sist.ContactoPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.ContactoPerfil", new[] { "ContactoId" });
            DropIndex("Sist.CompetenciaGerencialPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.CompetenciaAreaPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.CompetenciaCardinalPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.BeneficiosPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.DAMFO_290", new[] { "DireccionId_Id" });
            DropIndex("Sist.ActividadesPerfil", new[] { "DAMFO290Id" });
            DropIndex("Sist.PerfilIdiomas", new[] { "PerfilCandidatoId" });
            DropIndex("Sist.PerfilIdiomas", new[] { "NivelId" });
            DropIndex("Sist.PerfilIdiomas", new[] { "IdiomaId" });
            DropIndex("Sist.Formaciones", new[] { "PerfilCandidatoId" });
            DropIndex("Sist.Formaciones", new[] { "MonthTerminoId" });
            DropIndex("Sist.Formaciones", new[] { "YearTerminoId" });
            DropIndex("Sist.Formaciones", new[] { "MonthInicioId" });
            DropIndex("Sist.Formaciones", new[] { "YearInicioId" });
            DropIndex("Sist.Formaciones", new[] { "CarreraId" });
            DropIndex("Sist.Formaciones", new[] { "DocumentoValidadorId" });
            DropIndex("Sist.Formaciones", new[] { "EstadoEstudioId" });
            DropIndex("Sist.Formaciones", new[] { "GradoEstudioId" });
            DropIndex("Sist.Formaciones", new[] { "InstitucionEducativaId" });
            DropIndex("Sist.ExperienciasProfesionales", new[] { "PerfilCandidatoId" });
            DropIndex("Sist.ExperienciasProfesionales", new[] { "MonthTerminoId" });
            DropIndex("Sist.ExperienciasProfesionales", new[] { "YearTerminoId" });
            DropIndex("Sist.ExperienciasProfesionales", new[] { "MonthInicioId" });
            DropIndex("Sist.ExperienciasProfesionales", new[] { "YearInicioId" });
            DropIndex("Sist.ExperienciasProfesionales", new[] { "AreaId" });
            DropIndex("Sist.ExperienciasProfesionales", new[] { "GiroEmpresaId" });
            DropIndex("Sist.Cursos", new[] { "PerfilCandidatoId" });
            DropIndex("Sist.Cursos", new[] { "MonthTerminoId" });
            DropIndex("Sist.Cursos", new[] { "YearTerminoId" });
            DropIndex("Sist.Cursos", new[] { "MonthInicioId" });
            DropIndex("Sist.Cursos", new[] { "YearInicioId" });
            DropIndex("Sist.Cursos", new[] { "InstitucionEducativaId" });
            DropIndex("Sist.ConocimientosHabilidades", new[] { "PerfilCandidatoId" });
            DropIndex("Sist.ConocimientosHabilidades", new[] { "NivelId" });
            DropIndex("Sist.ConocimientosHabilidades", new[] { "InstitucionEducativaId" });
            DropIndex("Sist.Certificaciones", new[] { "PerfilCandidatoId" });
            DropIndex("Sist.Certificaciones", new[] { "MonthTerminoId" });
            DropIndex("Sist.Certificaciones", new[] { "YearTerminoId" });
            DropIndex("Sist.Certificaciones", new[] { "MonthInicioId" });
            DropIndex("Sist.Certificaciones", new[] { "YearInicioId" });
            DropIndex("Sist.ActividadEmpresas", new[] { "GiroEmpresaId" });
            DropIndex("Sist.Telefonos", new[] { "PersonaId" });
            DropIndex("Sist.Telefonos", new[] { "TipoTelefonoId" });
            DropIndex("Sist.Emails", new[] { "PersonaId" });
            DropIndex("Sist.Municipios", new[] { "EstadoId" });
            DropIndex("Sist.Estados", new[] { "PaisId" });
            DropIndex("Sist.Colonias", new[] { "PaisId" });
            DropIndex("Sist.Colonias", new[] { "EstadoId" });
            DropIndex("Sist.Colonias", new[] { "MunicipioId" });
            DropIndex("Sist.Direcciones", new[] { "PersonaId" });
            DropIndex("Sist.Direcciones", new[] { "ColoniaId" });
            DropIndex("Sist.Direcciones", new[] { "MunicipioId" });
            DropIndex("Sist.Direcciones", new[] { "EstadoId" });
            DropIndex("Sist.Direcciones", new[] { "PaisId" });
            DropIndex("Sist.Direcciones", new[] { "TipoDireccionId" });
            DropIndex("Sist.PerfilCandidato", new[] { "CandidatoId" });
            DropIndex("Sist.AcercaDeMi", new[] { "PerfilCandidatoId" });
            DropIndex("Sist.AcercaDeMi", new[] { "PerfilExperienciaId" });
            DropIndex("Sist.AcercaDeMi", new[] { "AreaInteresId" });
            DropIndex("Sist.AcercaDeMi", new[] { "AreaExperienciaId" });
            DropTable("Sist.Referenciados");
            DropTable("Sist.Contactos");
            DropTable("Sist.Clientes");
            DropTable("Sist.Candidatos");
            DropTable("Sist.IdentityUserLogins");
            DropTable("Sist.IdentityUserClaims");
            DropTable("Sist.ApplicationUsers");
            DropTable("Sist.TiposPsicometrias");
            DropTable("Sist.TiposNominas");
            DropTable("Sist.TiposContratos");
            DropTable("Sist.TiposBeneficios");
            DropTable("Sist.IdentityUserRoles");
            DropTable("Sist.IdentityRoles");
            DropTable("Sist.TiposRedesSociales");
            DropTable("Sist.RedesSociales");
            DropTable("Sist.PrestacionesLey");
            DropTable("Sist.PeriodosPagos");
            DropTable("Sist.PerfilesProfesionales");
            DropTable("Sist.FormulariosIniciales");
            DropTable("Sist.FormasContacto");
            DropTable("Sist.DocumentosDamsa");
            DropTable("Sist.DiasSemana");
            DropTable("Sist.DiasObligatorios");
            DropTable("Sist.CompetenciasGerenciales");
            DropTable("Sist.CompetenciasCardinales");
            DropTable("Sist.CompetenciasAreas");
            DropTable("Sist.Cargos");
            DropTable("Sist.Porcentages");
            DropTable("Sist.ConocimientosInformaticos");
            DropTable("Sist.CandidatoConocimientoInformatico");
            DropTable("Sist.TiposReclutamientos");
            DropTable("Sist.ClasesReclutamientos");
            DropTable("Sist.PerfilReclutamientoes");
            DropTable("Sist.Aptitudes");
            DropTable("Sist.Agencias");
            DropTable("Sist.TelefonoPerfil");
            DropTable("Sist.RutasPerfil");
            DropTable("Sist.PsicometriasDamsas");
            DropTable("Sist.PsicometriasClientes");
            DropTable("Sist.ProcesoPerfils");
            DropTable("Sist.PrestacionesClientePerfil");
            DropTable("Sist.AptitudesPerfil");
            DropTable("Sist.ObservacionesPerfil");
            DropTable("Sist.HorariosPerfiles");
            DropTable("Sist.EscolaridadesPerfil");
            DropTable("Sist.DocumentosClientes");
            DropTable("Sist.ContactoPerfil");
            DropTable("Sist.CompetenciaGerencialPerfil");
            DropTable("Sist.CompetenciaAreaPerfil");
            DropTable("Sist.CompetenciaCardinalPerfil");
            DropTable("Sist.BeneficiosPerfil");
            DropTable("Sist.DAMFO_290");
            DropTable("Sist.ActividadesPerfil");
            DropTable("Sist.PerfilExperiencia");
            DropTable("Sist.Idiomas");
            DropTable("Sist.PerfilIdiomas");
            DropTable("Sist.GradosEstudios");
            DropTable("Sist.EstadosEstudios");
            DropTable("Sist.DocumentosValidadores");
            DropTable("Sist.Carreras");
            DropTable("Sist.Formaciones");
            DropTable("Sist.Areas");
            DropTable("Sist.ExperienciasProfesionales");
            DropTable("Sist.Cursos");
            DropTable("Sist.Niveles");
            DropTable("Sist.InstitucionesEducativas");
            DropTable("Sist.ConocimientosHabilidades");
            DropTable("Sist.Years");
            DropTable("Sist.Months");
            DropTable("Sist.Certificaciones");
            DropTable("Sist.TiposLicencias");
            DropTable("Sist.TiposDiscapacidades");
            DropTable("Sist.Generos");
            DropTable("Sist.EstadosCiviles");
            DropTable("Sist.TiposDirecciones");
            DropTable("Sist.TiposEmpresas");
            DropTable("Sist.TiposBases");
            DropTable("Sist.TamanosEmpresas");
            DropTable("Sist.GiroEmpresas");
            DropTable("Sist.ActividadEmpresas");
            DropTable("Sist.TiposTelefonos");
            DropTable("Sist.Telefonos");
            DropTable("Sist.Emails");
            DropTable("Sist.Municipios");
            DropTable("Sist.Paises");
            DropTable("Sist.Estados");
            DropTable("Sist.Colonias");
            DropTable("Sist.Direcciones");
            DropTable("Sist.Personas");
            DropTable("Sist.PerfilCandidato");
            DropTable("Sist.AreasInteres");
            DropTable("Sist.AreasExperiencia");
            DropTable("Sist.AcercaDeMi");
        }
    }
}
