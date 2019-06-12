using BusinessLogic.ServiceAPI;
using System;
using System.Linq;
using System.Web.Http;

namespace WebApi.Controllers
{
    /// <summary>
    /// Controller for Healthchecks and Verification of the App from the outside
    /// </summary>
    [AllowAnonymous]
    public class HealthController : ApiController
    {
        /// <summary>
        /// Checks that basic API Access is possible
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IHttpActionResult Get() {
            return Ok("works");
        }

        /// <summary>
        /// Checks that database access is possible, but does not reveal sensitive information.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("accessdb")]
        public IHttpActionResult GetDbTest()
        {
            try
            {
                using(var db = new CarsContext())
                {
                    db.Cars.FirstOrDefault();
                }

                return Ok("db access works");
            }
            catch (Exception ex)
            {
                return InternalServerError(new Exception("Call to DB generated exception"));
            }
        }
    }
}