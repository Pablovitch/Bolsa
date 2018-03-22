namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CatalogoEstados : DbMigration
    {
        public override void Up()
        {
            Sql("SET IDENTITY_INSERT [Sist].[Estados] ON");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave] ) VALUES (1, 'Aguascalientes', 42, 'AS')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (2, 'Baja California', 42, 'BC')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (3, 'Baja California Sur', 42, 'BS')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (4, 'Campeche', 42, 'CC')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (5, 'Chiapas', 42, 'CS')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (6, 'Chihuahua', 42, 'CH')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (7, 'Coahuila de Zaragoza', 42, 'CL')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (8, 'Colima', 42, 'CM')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (9, 'Ciudad de Mexico', 42, 'DF')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (10, 'Durango', 42, 'DG')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (11, 'Guanajuato', 42, 'GT')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (12, 'Guerrero', 42, 'GR')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (13, 'Hidalgo', 42, 'HG')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (14, 'Jalisco', 42, 'JC')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (15, 'Mexico', 42, 'MC')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (16, 'Michoacan de Ocampo', 42, 'MN')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (17, 'Morelos', 42, 'MS')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (18, 'Nayarit', 42, 'NT')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (19, 'Nuevo Leon', 42, 'NL')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (20, 'Oaxaca', 42, 'OC')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (21, 'Puebla', 42, 'PL')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (22, 'Queretaro', 42, 'QT')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (23, 'Quintana Roo', 42, 'QR')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (24, 'San Luis Potosi', 42, 'SP')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (25, 'Sinaloa', 42, 'SL')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (26, 'Sonora', 42, 'SR')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (27, 'Tabasco', 42, 'TC')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (28, 'Tamaulipas', 42, 'TS')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (29, 'Tlaxcala', 42, 'TL')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (30, 'Veracruz', 42, 'VZ')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (31, 'Yucatan', 42, 'YN')");
            Sql("INSERT [Sist].[Estados] ([Id], [estado], [PaisId], [Clave]) VALUES (32, 'Zacatecas', 42, 'ZS')");
            Sql("SET IDENTITY_INSERT [Sist].[Estados] OFF");
        }
        
        public override void Down()
        {
        }
    }
}
