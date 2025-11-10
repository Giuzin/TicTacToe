import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../services/resultado.service';

@Component({
  selector: 'app-ultimos',
  templateUrl: './ultimos.component.html'
})
export class UltimosComponent implements OnInit {
  items: any[] = [];
  constructor(private svc: ResultadoService) {}
  ngOnInit(): void { this.load(); }
  load() {
    this.svc.getUltimos().subscribe(res => this.items = res);
  }
}
