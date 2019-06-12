using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi
{
    public class CarsContext : DbContext
    {
        private const string DefaultPassword = "3xp3rtsL!ve";

        public CarsContext() : base(GetConnectionString())
        {
            Database.SetInitializer(new CarsInitializer());
        }

        private static string GetConnectionString()
        {
            var envPassword = Environment.GetEnvironmentVariable("DBPASSWORD", EnvironmentVariableTarget.Machine);
            return System.Configuration.ConfigurationManager.ConnectionStrings["CarsDB"] + 
                (string.IsNullOrEmpty(envPassword) ? DefaultPassword : envPassword);
        }

        public IDbSet<Car> Cars { get; set; }
    }
}