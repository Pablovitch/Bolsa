using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BolsaDeTrabajo.Startup))]
namespace BolsaDeTrabajo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
