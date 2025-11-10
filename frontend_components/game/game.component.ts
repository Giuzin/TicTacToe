import { Component } from '@angular/core';
import { ResultadoService } from '../services/resultado.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent {
  board: string[] = Array(9).fill('');
  xTurn = true;
  finished = false;
  message = '';

  constructor(private resultadoService: ResultadoService) {}

  play(i: number) {
    if (this.finished || this.board[i]) return;
    this.board[i] = this.xTurn ? 'X' : 'O';
    this.xTurn = !this.xTurn;
    const winner = this.checkWinner();
    if (winner) {
      this.finished = true;
      this.message = `Vencedor: ${winner}`;
      this.sendResult(winner);
    } else if (!this.board.includes('')) {
      this.finished = true;
      this.message = 'Empate';
      this.sendResult('');
    }
  }

  checkWinner(): string | null {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (const [a,b,c] of lines) {
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a];
      }
    }
    return null;
  }

  reset() {
    this.board = Array(9).fill('');
    this.xTurn = true;
    this.finished = false;
    this.message = '';
  }

  sendResult(vencedor: string) {
    const payload = { Vencedor: vencedor === '' ? null : vencedor, DataHora: new Date().toISOString() };
    this.resultadoService.postResultado(payload).subscribe({
      next: () => console.log('resultado enviado'),
      error: err => console.error(err)
    });
  }
}
