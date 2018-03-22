using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BolsaDeTrabajo.Controllers.Api
{
    public class SitioWebController : ApiController
    {
        [HttpGet]
        public IHttpActionResult RemoteUrlExist(string url)
        {
            try
            {
                //Creating the HttpWebRequest
                HttpWebRequest request = WebRequest.Create(url) as HttpWebRequest;
                //Setting the Request method HEAD, you can also use GET too.
                request.Method = "HEAD";
                //Getting the Web Response.
                HttpWebResponse response = request.GetResponse() as HttpWebResponse;
                //Returns TRUE if the Status code == 200
                response.Close();
                return Ok(response.StatusCode == HttpStatusCode.OK);
            }
            catch
            {
                //Any exception will returns false.
                return Ok(false);
            }
        }


        //[HttpGet]
        //private IHttpActionResult GetRemoteUrlExist()
        //{

        //    //Any exception will returns false.
        //    return Ok("OK");

        //}
    }
}
