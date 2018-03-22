namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addCatalogoGradoEstudios : DbMigration
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
        }
        
        public override void Down()
        {
        }
    }
}
