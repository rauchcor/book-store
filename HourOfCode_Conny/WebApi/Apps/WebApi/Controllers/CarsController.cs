using System;
using System.Collections.Generic;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    /// <summary>
    /// Manages Cars
    /// </summary>
    public class CarsController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            var envCarBrand = Environment.GetEnvironmentVariable("CAR", EnvironmentVariableTarget.Machine);
            var cars = new List<Car>
            {
                new Car(){Id = 1, Brand = "VM", PS = 100},
                new Car(){Id = 2, Brand = "Porsche", PS = 200}
            };
            if (!String.IsNullOrEmpty(envCarBrand))
                cars.Add(new Car() { Id = 3, Brand = envCarBrand, PS = 70 });

            return Ok(cars);
        }
    }
}