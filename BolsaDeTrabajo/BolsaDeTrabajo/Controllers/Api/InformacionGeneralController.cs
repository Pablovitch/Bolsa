using AutoMapper;
using BolsaDeTrabajo.Dtos.DatosGenerales;
using BolsaDeTrabajo.Models;
using System;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.DatosGenerales
{
    public class InformacionGeneralController : ApiController
    {
        private ApplicationDbContext _Context;
        public InformacionGeneralController()
        {
            _Context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetInformacionGeneral(Guid CandidatoId)
        {
                             
            var GralInfo = (from c in _Context.Candidatos
                            join e in _Context.Emails on c.Id equals e.PersonaId into g
                            where c.Id == CandidatoId
                            select new InformacionGeneralDto
                            {
                                CandidatoId = c.Id,
                                Nombre = c.Nombre,
                                ApellidoPaterno = c.ApellidoPaterno,
                                ApellidoMaterno = c.ApellidoMaterno,
                                ImgProfileUrl = c.ImgProfileUrl,
                                curp = c.CURP,
                                email = g.FirstOrDefault().email,
                            }).ToList().ElementAt(0);

            return Ok(GralInfo); 
        }

        [HttpPut]
        public IHttpActionResult UpdateInformacionGeneral(Guid CandidatoId, InformacionGeneralDto InfoGral)
        {
            var candidatoDB = _Context.Candidatos.SingleOrDefault(c => c.Id == CandidatoId);
            if (candidatoDB.ImgProfileUrl != string.Empty && candidatoDB.ImgProfileUrl != null)
            {
                var path = "~" + candidatoDB.ImgProfileUrl;
                string fullPath = System.Web.Hosting.HostingEnvironment.MapPath(path);
                if (File.Exists(fullPath))
                    File.Delete(fullPath);
            }
            candidatoDB.Nombre = InfoGral.Nombre;
            candidatoDB.ApellidoPaterno = InfoGral.ApellidoPaterno;
            candidatoDB.ApellidoMaterno = InfoGral.ApellidoMaterno;
            candidatoDB.ImgProfileUrl = InfoGral.ImgProfileUrl;
            _Context.Entry(candidatoDB).State = EntityState.Modified;
            _Context.SaveChanges();

            var emailInDB = _Context.Emails.SingleOrDefault(e => e.PersonaId == CandidatoId);
            emailInDB.email = InfoGral.email;
            emailInDB.PersonaId = CandidatoId;
            _Context.Emails.Attach(emailInDB);
            _Context.Entry(emailInDB).State = EntityState.Modified;
            _Context.SaveChanges(); 

            return Ok( Mapper.Map<Candidato, InformacionGeneralDto>(candidatoDB));
        }
    }
}
