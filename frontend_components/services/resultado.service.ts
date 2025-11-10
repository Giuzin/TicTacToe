import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResultadoService {
  private base = `${environment.apiUrl}/resultados`;
  constructor(private http: HttpClient) {}

  postResultado(payload: any): Observable<any> {
    return this.http.post(this.base, payload);
  }

  getUltimos() {
    return this.http.get<any[]>(`${this.base}/ultimos`);
  }
}
