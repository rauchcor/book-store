using System.Data.Entity;

namespace WebApi
{
    internal class CarsInitializer : CreateDatabaseIfNotExists<CarsContext>
    {
        protected override void Seed(CarsContext context)
        {
            context.Cars.Add(new Models.Car() { Brand = "VW", PS = 100 });
            context.Cars.Add(new Models.Car() { Brand = "Renault", PS = 75 });
            context.SaveChanges();

            base.Seed(context);
        }
    }
}