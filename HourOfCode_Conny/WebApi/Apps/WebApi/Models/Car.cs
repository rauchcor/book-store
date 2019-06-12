using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Car
    {
        [Key]
        public int Id { get; set; }

        public string Brand { get; set; }
        public int PS { get; set; }
    }
}