using Microsoft.EntityFrameworkCore;
using TicTacToeApi.Models;

namespace TicTacToeApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Resultado> Resultados { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Resultado>().ToTable("Resultados");
        }
    }
}
