using BolsaDeTrabajo.Models;
using System.Linq;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class TiposTelefonosController : ApiController
    {
        private ApplicationDbContext _context;
        public TiposTelefonosController()
        {
            _context = new ApplicationDbContext();
        }

       public IHttpActionResult GetTiposTelefonos()
        {
            return Ok(_context.TiposTelefonos.ToList());
        }
    }
}
