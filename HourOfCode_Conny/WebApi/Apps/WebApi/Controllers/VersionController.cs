using System;
using System.Reflection;
using System.Web.Http;

namespace WebApi.Controllers
{
    /// <summary>
    /// Returns the current version of the API
    /// </summary>
    [AllowAnonymous]
    public class VersionController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetVersion()
        {
            try
            {
                Assembly assembly = Assembly.GetExecutingAssembly();
                string version = assembly.GetName().Version.ToString();
                if (!string.IsNullOrWhiteSpace(version))
                    return Ok(version);
                else
                    return InternalServerError(new Exception("Call from Version returned null"));
            }
            catch (Exception ex)
            {
                return InternalServerError(new Exception("Getting Version generated exception"));
            }
        }
    }
}