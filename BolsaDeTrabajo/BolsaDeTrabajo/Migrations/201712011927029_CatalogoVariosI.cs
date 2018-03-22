namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CatalogoVariosI : DbMigration
    {
        public override void Up()
        {
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Primaria')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Secundaria')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Preparatoria')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Bachillerato')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Técnico')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Licenciatura')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Maestría')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Doctorado')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Otro')");

            Sql("INSERT INTO [Sist].[InstitucionesEducativas](institucionEducativa) VALUES('Instituto Politécnico Nacional')");
            Sql("INSERT INTO [Sist].[InstitucionesEducativas](institucionEducativa) VALUES('Tecnológico de Monterrey')");
            Sql("INSERT INTO [Sist].[InstitucionesEducativas](institucionEducativa) VALUES('Universidad Nacional Autónoma de México')");
            Sql("INSERT INTO [Sist].[InstitucionesEducativas](institucionEducativa) VALUES('Otro')");

            Sql("INSERT INTO [Sist].[EstadosEstudios] VALUES('Cursando')");
            Sql("INSERT INTO [Sist].[EstadosEstudios] VALUES('Trunco')");
            Sql("INSERT INTO [Sist].[EstadosEstudios] VALUES('Pasante')");
            Sql("INSERT INTO [Sist].[EstadosEstudios] VALUES('Culminado ')");
            Sql("INSERT INTO [Sist].[EstadosEstudios] VALUES('Otro')");

            Sql("INSERT INTO [Sist].[Months] VALUES ('Enero')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Febrero')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Marzo')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Abril')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Mayo')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Junio')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Julio')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Agosto')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Septiembre')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Octubre')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Noviembre')");
            Sql("INSERT INTO [Sist].[Months] VALUES ('Diciembre')");

            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Administración / Oficina')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Almacén / Logística / Transporte')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Atención a clientes')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('CallCenter / Telemercadeo')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Compras / Comercio Exterior')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Construcción y obra')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Contabilidad / Finanzas')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Dirección / Gerencia')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Diseño / Artes gráficas')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Docencia')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Hostelería / Turismo')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Informática / Telecomunicaciones')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Ingeniería')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Investigación y Calidad')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Legal / Asesoría')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Mantenimiento y Reparaciones Técnicas')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Medicina / Salud')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Mercadotecnia / Publicidad / Comunicación')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Producción / Operarios / Manufactura')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Recursos Humanos')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Servicios Generales, Aseo y Seguridad')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Ventas')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Otro:')");

            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Persona sin experiencia')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Estudiante')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Becario o practicante')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Operativo')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Técnico')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Profesionista')");

            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Administrativos')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Biología')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Comunicaciones')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Construcción')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Contabilidad')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Creatividad, Producción y Diseño Comercial')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Derecho y Leyes')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Educación')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Ingeniería')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Logística, Transportación y Distribución')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Manufactura, Producción y Operación')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Mercadotecnia, Publicidad y Relaciones Públicas.')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Recursos Humanos')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Salud y Belleza')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Sector Salud')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Seguro y Reaseguro')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Tecnologías de la Información / Sistemas')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Turismo, Hospitalidad y Gastronomía')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Ventas')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Veterinaria / Zoología')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Otro')");

            Sql("INSERT INTO [Sist].[Areas] VALUES ('Administración / Oficina')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Almacén / Logística / Transporte')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Atención a clientes')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('CallCenter / Telemercadeo')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Compras / Comercio Exterior')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Construcción y obra')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Contabilidad / Finanzas')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Dirección / Gerencia')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Diseño / Artes graficas')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Docencia')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Hostelería / Turismo')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Informática / Telecomunicaciones')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Ingeniería')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Investigación y Calidad')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Legal / Asesoría')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Mantenimiento y Reparaciones Técnicas')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Medicina / Salud')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Mercadotecnia / Publicidad / Comunicación')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Producción / Operarios / Manufactura')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Recursos Humanos')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Servicios Generales, Aseo y Seguridad')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Ventas')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Otro: ')");
        }
        
        public override void Down()
        {
        }
    }
}
