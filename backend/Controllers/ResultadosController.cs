using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicTacToeApi.Data;
using TicTacToeApi.Models;

namespace TicTacToeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResultadosController : ControllerBase
    {
        private readonly AppDbContext _db;
        public ResultadosController(AppDbContext db) => _db = db;

        [HttpPost]
        public async Task<IActionResult> PostResultado([FromBody] Resultado resultado)
        {
            resultado.DataHora = DateTime.UtcNow;
            _db.Resultados.Add(resultado);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUltimos), new { id = resultado.Id }, resultado);
        }

        [HttpGet("ultimos")]
        public async Task<IActionResult> GetUltimos()
        {
            var ultimos = await _db.Resultados
                .Where(r => r.Vencedor != null && r.Vencedor != "")
                .OrderByDescending(r => r.DataHora)
                .Take(10)
                .ToListAsync();

            return Ok(ultimos);
        }
    }
}
