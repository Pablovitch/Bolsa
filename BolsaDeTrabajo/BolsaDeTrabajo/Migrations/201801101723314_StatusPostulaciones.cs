namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class StatusPostulaciones : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "Sist.StatusPostulacions", newName: "StatusPostulaciones");
            Sql("SET IDENTITY_INSERT [Sist].[StatusPostulaciones] ON");
            Sql("INSERT [Sist].[StatusPostulaciones] ([Id],[Status]) VALUES (1,'Postulada')");
            Sql("INSERT [Sist].[StatusPostulaciones] ([Id],[Status]) VALUES (2,'Proceso de evaluación')");
            Sql("INSERT [Sist].[StatusPostulaciones] ([Id],[Status]) VALUES (3,'Proceso de Seguimiento')");
            Sql("INSERT [Sist].[StatusPostulaciones] ([Id],[Status]) VALUES (4,'CV visto')");
            Sql("INSERT [Sist].[StatusPostulaciones] ([Id],[Status]) VALUES (5,'Declinada')");
            Sql("INSERT [Sist].[StatusPostulaciones] ([Id],[Status]) VALUES (6,'En entrevista')");
            Sql("INSERT [Sist].[StatusPostulaciones] ([Id],[Status]) VALUES (7,'Proceso Finalizado')");
            Sql("SET IDENTITY_INSERT [Sist].[StatusPostulaciones] ON");
        }
        
        public override void Down()
        {
            RenameTable(name: "Sist.StatusPostulaciones", newName: "StatusPostulacions");

        }
    }
}
