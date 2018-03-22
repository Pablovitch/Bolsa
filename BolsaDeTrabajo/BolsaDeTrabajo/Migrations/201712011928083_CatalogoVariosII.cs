namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CatalogoVariosII : DbMigration
    {
        public override void Up()
        {
            Sql("SET IDENTITY_INSERT [Sist].[ClasesReclutamientos] ON ");
            Sql("INSERT [Sist].[ClasesReclutamientos] ([Id], [clasesReclutamiento]) VALUES (1, N'Especializado')");
            Sql("INSERT [Sist].[ClasesReclutamientos] ([Id], [clasesReclutamiento]) VALUES (2, N'Operativo')");
            Sql("SET IDENTITY_INSERT [Sist].[ClasesReclutamientos] OFF");

            Sql("SET IDENTITY_INSERT [Sist].[TamanosEmpresas] ON ");
            Sql("INSERT [Sist].[TamanosEmpresas] ([Id], [tamanoEmpresa]) VALUES (1, N'Microempresa 1-9')");
            Sql("INSERT [Sist].[TamanosEmpresas] ([Id], [tamanoEmpresa]) VALUES (2, N'Peque?a Empresa 10-49')");
            Sql("INSERT [Sist].[TamanosEmpresas] ([Id], [tamanoEmpresa]) VALUES (3, N'Mediana Empresa 50-249')");
            Sql("INSERT [Sist].[TamanosEmpresas] ([Id], [tamanoEmpresa]) VALUES (4, N'Gran Empresa > 250')");
            Sql("SET IDENTITY_INSERT [Sist].[TamanosEmpresas] OFF");

            Sql("SET IDENTITY_INSERT [Sist].[TiposBases] ON ");
            Sql("INSERT [Sist].[TiposBases] ([Id], [tipoBase]) VALUES (1, N'Base Natural')");
            Sql("INSERT [Sist].[TiposBases] ([Id], [tipoBase]) VALUES (2, N'Cuentas Asignadas')");
            Sql("INSERT [Sist].[TiposBases] ([Id], [tipoBase]) VALUES (3, N'Clientes Perdidos')");
            Sql("INSERT [Sist].[TiposBases] ([Id], [tipoBase]) VALUES (4, N'Oportunidades de Negocio')");
            Sql("INSERT [Sist].[TiposBases] ([Id], [tipoBase]) VALUES (5, N'Proveedores del Grupo')");
            Sql("INSERT [Sist].[TiposBases] ([Id], [tipoBase]) VALUES (6, N'Contacto Conmutador')");
            Sql("INSERT [Sist].[TiposBases] ([Id], [tipoBase]) VALUES (7, N'Contacto por Correo Electrónico')");
            Sql("INSERT [Sist].[TiposBases] ([Id], [tipoBase]) VALUES (8, N'Empresa Referenciada')");
            Sql("SET IDENTITY_INSERT [Sist].[TiposBases] OFF");

            Sql("SET IDENTITY_INSERT [Sist].[TiposDirecciones] ON ");
            Sql("INSERT [Sist].[TiposDirecciones] ([Id], [tipoDireccion]) VALUES (1, N'Personal')");
            Sql("INSERT [Sist].[TiposDirecciones] ([Id], [tipoDireccion]) VALUES (2, N'Fiscal')");
            Sql("INSERT [Sist].[TiposDirecciones] ([Id], [tipoDireccion]) VALUES (3, N'Sucursal')");
            Sql("SET IDENTITY_INSERT [Sist].[TiposDirecciones] OFF");


            Sql("SET IDENTITY_INSERT [Sist].[TiposReclutamientos] ON ");
            Sql("INSERT [Sist].[TiposReclutamientos] ([Id], [tipoReclutamiento]) VALUES (1, N'Puro')");
            Sql("INSERT [Sist].[TiposReclutamientos] ([Id], [tipoReclutamiento]) VALUES (2, N'Subcontratación')");
            Sql("INSERT [Sist].[TiposReclutamientos] ([Id], [tipoReclutamiento]) VALUES (3, N'Staff')");
            Sql("SET IDENTITY_INSERT [Sist].[TiposReclutamientos] OFF");



            Sql("INSERT [Sist].[EstadosCiviles] ([estadoCivil]) VALUES (N'Soltero/a')");
            Sql("INSERT [Sist].[EstadosCiviles] ([estadoCivil]) VALUES (N'Comprometido/a')");
            Sql("INSERT [Sist].[EstadosCiviles] ([estadoCivil]) VALUES (N'Casado/a')");
            Sql("INSERT [Sist].[EstadosCiviles] ([estadoCivil]) VALUES (N'Divorciado/a')");
            Sql("INSERT [Sist].[EstadosCiviles] ([estadoCivil]) VALUES (N'Viudo/a')");
            Sql("INSERT [Sist].[EstadosCiviles] ([estadoCivil]) VALUES (N'Indistinto')");
            Sql("INSERT [Sist].[EstadosCiviles] ([estadoCivil]) VALUES (N'No Aplica')");

            Sql("INSERT [Sist].[Generos] ([genero]) VALUES ('Masculino')");
            Sql("INSERT [Sist].[Generos] ([genero]) VALUES ('Femenino')");
            Sql("INSERT [Sist].[Generos] ([genero]) VALUES ('Indistinto')");

            Sql("SET IDENTITY_INSERT[sist].[DiasSemana] ON ");
            Sql("INSERT[sist].[DiasSemana]([Id], [diaSemana]) VALUES(1, N'Lunes') ");
            Sql("INSERT[sist].[DiasSemana]([Id], [diaSemana]) VALUES(2, N'Martes') ");
            Sql("INSERT[sist].[DiasSemana]([Id], [diaSemana]) VALUES(3, N'Miércoles') ");
            Sql("INSERT[sist].[DiasSemana]([Id], [diaSemana]) VALUES(4, N'Jueves') ");
            Sql("INSERT[sist].[DiasSemana]([Id], [diaSemana]) VALUES(5, N'Viernes') ");
            Sql("INSERT[sist].[DiasSemana]([Id], [diaSemana]) VALUES(6, N'Sábado') ");
            Sql("INSERT[sist].[DiasSemana]([Id], [diaSemana]) VALUES(7, N'Domingo') ");
            Sql("SET IDENTITY_INSERT[sist].[DiasSemana] OFF ");



            Sql("INSERT INTO [Sist].[GiroEmpresas] VALUES ('Industrial')");
            Sql("INSERT INTO [Sist].[GiroEmpresas] VALUES ('Comercial')");
            Sql("INSERT INTO [Sist].[GiroEmpresas] VALUES ('Servicios')");



            Sql(" SET IDENTITY_INSERT[sist].[ActividadEmpresas] ON ");

            Sql(" INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(1, 1, N'Extractivas')");
            Sql("INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(2, 1, N'Manufactureras')");
            Sql(" INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(3, 1, N'Agropecuarias')");
            Sql(" INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(4, 2, N'Mayoristas')");
            Sql(" INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(5, 2, N'Menudeo')");
            Sql("INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(6, 2, N'Minoristas/Detallistas')");
            Sql("INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(7, 2, N'Comisionistas')");
            Sql(" INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(8, 3, N'Públicos varios')");
            Sql("INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(9, 3, N'Privados varios')");
            Sql("INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(10, 3, N'Transporte')");
            Sql("INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(11, 3, N'Turismo')");
            Sql("INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(12, 3, N'Instituciones financieras')");
            Sql(" INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(13, 3, N'Educación')");
            Sql("INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(14, 3, N'Salubridad')");
            Sql(" INSERT[sist].[ActividadEmpresas] ([Id], [GiroEmpresaId], [actividadEmpresa]) VALUES(15, 3, N'Finanzas y seguros')");
            Sql("SET IDENTITY_INSERT[sist].[ActividadEmpresas] OFF ");


            Sql("SET IDENTITY_INSERT [sist].[Aptitudes] ON ");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (1, N'Razonamiento lógico')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (2, N'Razonamiento abstracto')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (3, N'Comprensión verbal y expresión escrita')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (4, N'Razonamiento espacial')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (5, N'Concentración mental')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (6, N'Destreza manual y coordinación viso-manual')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (7, N'Memoria')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (8, N'Inventiva-originalidad-relación con el medio.')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (9, N'Capacidad analítica')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (10, N'Capacidad de síntesis')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (11, N'Razonamiento físico-mecónico')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (12, N'Capacidad de observación')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (13, N'Atención distribuida')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (14, N'Habilidad corporal')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (15, N'Habilidad musical')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (16, N'Inferencia')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (17, N'Razonamiento inductivo')");
            Sql("INSERT [sist].[Aptitudes] ([Id], [aptitud]) VALUES (18, N'Razonamiento deductivo')");
            Sql("SET IDENTITY_INSERT [sist].[Aptitudes] OFF");

            Sql("SET IDENTITY_INSERT [sist].[TiposEmpresas] ON ");
            Sql("INSERT [sist].[TiposEmpresas] ([Id], [tipoEmpresa]) VALUES (1, N'Local')");
            Sql("INSERT [sist].[TiposEmpresas] ([Id], [tipoEmpresa]) VALUES (2, N'Nacional')");
            Sql("INSERT [sist].[TiposEmpresas] ([Id], [tipoEmpresa]) VALUES (3, N'Extranjera')");
            Sql("SET IDENTITY_INSERT [sist].[TiposEmpresas] OFF");

            Sql("INSERT INTO [Sist].[Years] VALUES (1930)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1931)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1932)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1933)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1934)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1935)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1936)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1937)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1938)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1939)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1940)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1941)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1942)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1943)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1944)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1945)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1946)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1947)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1948)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1949)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1950)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1951)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1952)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1953)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1954)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1955)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1956)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1957)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1958)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1959)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1960)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1961)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1962)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1963)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1964)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1965)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1966)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1967)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1968)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1969)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1970)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1971)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1972)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1973)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1974)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1975)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1976)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1977)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1978)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1979)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1980)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1981)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1982)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1983)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1984)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1985)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1986)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1987)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1988)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1989)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1990)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1991)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1992)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1993)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1994)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1995)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1996)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1997)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1998)");
            Sql("INSERT INTO [Sist].[Years] VALUES (1999)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2000)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2001)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2002)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2003)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2004)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2005)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2006)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2007)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2008)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2009)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2010)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2011)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2012)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2013)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2014)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2015)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2016)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2017)");
            Sql("INSERT INTO [Sist].[Years] VALUES (2018)");
        }
        
        public override void Down()
        {
        }
    }
}
