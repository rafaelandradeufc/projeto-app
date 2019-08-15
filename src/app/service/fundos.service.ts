import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Fundo } from '../model/fundo';

@Injectable({
  providedIn: 'root'
})
export class FundosService {

  private URL1 = "api/fundos";
  private URL2 = "api/fundos_detail";

  constructor(private http: HttpClient) { }

  getAllFundos(): Observable<Fundo[]> {
    return this.http.get<Fundo[]>(this.URL1);
  }

  getFundo(cnpj: string): Observable<Fundo> {
    return this.http.get<Fundo>(this.URL2 + "?cnpj=" + cnpj);
  }
}
