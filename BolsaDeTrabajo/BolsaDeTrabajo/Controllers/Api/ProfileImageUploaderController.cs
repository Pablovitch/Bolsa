using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.UI.WebControls;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class ProfileImageUploaderController : ApiController
    {
        private ApplicationDbContext _Context;
        public ProfileImageUploaderController()
        {
            _Context = new ApplicationDbContext();
        }
        [HttpPost]
        public IHttpActionResult PostFileUpload()
        {
            if (HttpContext.Current.Request.Files.AllKeys.Any())
            {
                // Get the uploaded image from the Files collection  
                var httpPostedFile = HttpContext.Current.Request.Files["UploadedImage"];
                if (httpPostedFile != null)
                {
                    //var fileName = Path.GetFileName(httpPostedFile.FileName);
                    var ext = httpPostedFile.FileName.Substring(httpPostedFile.FileName.LastIndexOf('.')).ToLower();
                    var fileName = DateTime.Now.Day.ToString() + DateTime.Now.Year.ToString() + DateTime.Now.Month.ToString() + Guid.NewGuid().ToString()+ext;
                    var path = Path.Combine(HttpContext.Current.Server.MapPath("~/PerfilImagenes"), fileName);
                    // Save the uploaded file to "UploadedFiles" folder 
                    httpPostedFile.SaveAs(path);
                    
                   
                    return Ok("/PerfilImagenes/" + fileName);
                    
                }
            }
            return Ok("Image is not Uploaded");
        }

        [HttpPut]
        public IHttpActionResult SetImageProfileUrl(Guid id, string imgUrl)
        {
            var candidato = _Context.Candidatos.SingleOrDefault(c => c.Id == id);
            if (candidato.ImgProfileUrl != string.Empty && candidato.ImgProfileUrl != null)
            {
                if (File.Exists(imgUrl))
                    File.Delete(imgUrl);
            }            
            candidato.ImgProfileUrl = imgUrl;
            _Context.Entry(candidato).State = EntityState.Modified;
            _Context.SaveChanges();
            return Ok();
        }

        

    }
}
