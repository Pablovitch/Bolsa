using BolsaDeTrabajo.Models;
using System;
using System.Web.Http;
using System.Net.Mail;
using System.Linq;
using System.Data.Entity;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class EmailConfirmController : ApiController
    {
        private ApplicationDbContext _context;
        private const string emailDAMSA = "aatayde@damsa.com.mx";
        private const string confirmationPath = "localhost:/confirmation/";
        public EmailConfirmController()
        {
            _context = new ApplicationDbContext();
        }

        public IHttpActionResult SendEmailConfirmation(Guid candidatoId, string email)
        { 
            var DBusuario = _context.AspNetUsers.SingleOrDefault(u => u.IdPersona == candidatoId);
            if(DBusuario.EmailConfirmed)
            {
                return Ok();
            }
            else
            {
                
                DBusuario.claveConfirmacionEmail= Guid.NewGuid();
                _context.Entry(DBusuario).State = EntityState.Modified;
                _context.SaveChanges();
                MailMessage MessageConfirmation = new MailMessage();
                MessageConfirmation.To.Add(new MailAddress(email));
                MessageConfirmation.From = new MailAddress(emailDAMSA);
                MessageConfirmation.Subject = "Bolsa de Trabajo DAMSA confirmación de correo";
                MessageConfirmation.Body = "<b>De click en la siguiente liga para confirmar su e-mail<b/><br/>" +
                    "<a href=\" " + confirmationPath+"" + "\">Confirmar correo</a>";
                MessageConfirmation.IsBodyHtml = true;
                MessageConfirmation.Priority = MailPriority.Normal;

                SmtpClient smtp = new SmtpClient();
                smtp.Host = "google.com";
                smtp.Port = 25;
                smtp.EnableSsl = false;

                return Ok();
            }
           

            
        }
    }
}
