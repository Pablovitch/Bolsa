using AutoMapper;
using BolsaDeTrabajo.Dtos;
using BolsaDeTrabajo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class UsuarioController : ApiController
    {
        private ApplicationDbContext _context;

        public UsuarioController()
        {
            _context = new ApplicationDbContext();
        }

        [HttpGet]
        public IHttpActionResult GetUsuario(string usuarioId)
        {
            var userId = usuarioId.ToString();
            if (string.IsNullOrWhiteSpace(userId))
                return Ok();

            var usuario = _context.AspNetUsers
                .Where(user => user.Id == usuarioId)
                .SingleOrDefault();
                //.ToList().ElementAt(0);

            return Ok(Mapper.Map<AspNetUsers, UserDto>(usuario));
        }
    }
}
