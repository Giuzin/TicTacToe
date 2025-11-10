using System.ComponentModel.DataAnnotations;

namespace TicTacToeApi.Models
{
    public class Resultado
    {
        [Key]
        public int Id { get; set; }
        public string? Vencedor { get; set; } // "X" or "O" or null for draw
        public DateTime DataHora { get; set; }
    }
}
