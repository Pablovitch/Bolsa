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
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('T�cnico')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Licenciatura')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Maestr�a')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Doctorado')");
            Sql("INSERT INTO [Sist].[GradosEstudios] VALUES('Otro')");

            Sql("INSERT INTO [Sist].[InstitucionesEducativas](institucionEducativa) VALUES('Instituto Polit�cnico Nacional')");
            Sql("INSERT INTO [Sist].[InstitucionesEducativas](institucionEducativa) VALUES('Tecnol�gico de Monterrey')");
            Sql("INSERT INTO [Sist].[InstitucionesEducativas](institucionEducativa) VALUES('Universidad Nacional Aut�noma de M�xico')");
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

            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Administraci�n / Oficina')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Almac�n / Log�stica / Transporte')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Atenci�n a clientes')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('CallCenter / Telemercadeo')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Compras / Comercio Exterior')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Construcci�n y obra')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Contabilidad / Finanzas')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Direcci�n / Gerencia')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Dise�o / Artes gr�ficas')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Docencia')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Hosteler�a / Turismo')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Inform�tica / Telecomunicaciones')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Ingenier�a')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Investigaci�n y Calidad')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Legal / Asesor�a')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Mantenimiento y Reparaciones T�cnicas')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Medicina / Salud')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Mercadotecnia / Publicidad / Comunicaci�n')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Producci�n / Operarios / Manufactura')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Recursos Humanos')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Servicios Generales, Aseo y Seguridad')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Ventas')");
            Sql("INSERT INTO [Sist].[AreasExperiencia](areaExperiencia) VALUES ('Otro:')");

            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Persona sin experiencia')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Estudiante')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Becario o practicante')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Operativo')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('T�cnico')");
            Sql("INSERT INTO [Sist].[PerfilExperiencia](perfilExperiencia) VALUES ('Profesionista')");

            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Administrativos')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Biolog�a')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Comunicaciones')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Construcci�n')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Contabilidad')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Creatividad, Producci�n y Dise�o Comercial')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Derecho y Leyes')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Educaci�n')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Ingenier�a')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Log�stica, Transportaci�n y Distribuci�n')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Manufactura, Producci�n y Operaci�n')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Mercadotecnia, Publicidad y Relaciones P�blicas.')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Recursos Humanos')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Salud y Belleza')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Sector Salud')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Seguro y Reaseguro')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Tecnolog�as de la Informaci�n / Sistemas')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Turismo, Hospitalidad y Gastronom�a')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Ventas')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Veterinaria / Zoolog�a')");
            Sql("INSERT INTO [Sist].[AreasInteres](areaInteres) VALUES ('Otro')");

            Sql("INSERT INTO [Sist].[Areas] VALUES ('Administraci�n / Oficina')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Almac�n / Log�stica / Transporte')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Atenci�n a clientes')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('CallCenter / Telemercadeo')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Compras / Comercio Exterior')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Construcci�n y obra')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Contabilidad / Finanzas')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Direcci�n / Gerencia')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Dise�o / Artes graficas')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Docencia')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Hosteler�a / Turismo')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Inform�tica / Telecomunicaciones')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Ingenier�a')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Investigaci�n y Calidad')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Legal / Asesor�a')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Mantenimiento y Reparaciones T�cnicas')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Medicina / Salud')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Mercadotecnia / Publicidad / Comunicaci�n')");
            Sql("INSERT INTO [Sist].[Areas] VALUES ('Producci�n / Operarios / Manufactura')");
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
