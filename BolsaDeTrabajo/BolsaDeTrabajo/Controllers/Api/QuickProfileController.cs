using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class QuickProfileController : ApiController
    {
        private ApplicationDbContext _context;
        public QuickProfileController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetQuickProfile(Guid candidatoId)
        {
            var quickProfile = _context.Candidatos
                                    .Where(c => c.Id == candidatoId)
                                    .Select(qp => new QuickProfile
                                    {
                                        candidatoId = qp.Id,
                                        nombreCompleto=qp.Nombre+" "+qp.ApellidoPaterno+" "+ qp.ApellidoMaterno,
                                        urlImageProfile=qp.ImgProfileUrl
                                    }).First();
            return Ok(quickProfile);
        }
        
    }
    public class QuickProfile {
        public Guid candidatoId { get; set; }
        public string nombreCompleto { get; set; }
        public string urlImageProfile { get; set; }
    }
}
