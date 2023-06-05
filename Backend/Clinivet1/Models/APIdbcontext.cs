using Microsoft.EntityFrameworkCore;

namespace PetAPI.Models
{
    public class APIdbcontext : DbContext
    {
        public APIdbcontext(DbContextOptions option) : base(option)
        {

        }

        public DbSet<Pet> pets { get; set; }
    }
}
