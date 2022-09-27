using GoTAPI.Models;
using Microsoft.EntityFrameworkCore;


namespace GoTAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        public DbSet<Families> Families => Set<Families>();
        public DbSet<User> Users => Set<User>();
       
    }
}
