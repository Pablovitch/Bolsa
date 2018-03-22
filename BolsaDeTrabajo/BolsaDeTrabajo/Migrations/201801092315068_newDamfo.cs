namespace BolsaDeTrabajo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newDamfo : DbMigration
    {
        public override void Up()
        {
            DropColumn("Sist.DAMFO_290", "NombrePerfil");
            DropColumn("Sist.DAMFO_290", "EdadMinima");
            DropColumn("Sist.DAMFO_290", "EdadMaxima");
            DropColumn("Sist.DAMFO_290", "Experiencia");
            DropColumn("Sist.DAMFO_290", "SueldoMinimo");
            DropColumn("Sist.DAMFO_290", "SueldoMaximo");
            DropColumn("Sist.DAMFO_290", "Especifique");
        }
        
        public override void Down()
        {
            AddColumn("Sist.DAMFO_290", "Especifique", c => c.String());
            AddColumn("Sist.DAMFO_290", "SueldoMaximo", c => c.Decimal(nullable: false, precision: 18, scale: 3));
            AddColumn("Sist.DAMFO_290", "SueldoMinimo", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("Sist.DAMFO_290", "Experiencia", c => c.String(nullable: false, maxLength: 500, unicode: false));
            AddColumn("Sist.DAMFO_290", "EdadMaxima", c => c.Int(nullable: false));
            AddColumn("Sist.DAMFO_290", "EdadMinima", c => c.Int(nullable: false));
            AddColumn("Sist.DAMFO_290", "NombrePerfil", c => c.String(maxLength: 100, unicode: false));
        }
    }
}
