import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService<T> {
  private readonly API_URL: string = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  /**
   * Obtem um Observable com todos os objetos cadastrados na URL informada
   * @param endpoint Endpoint da API para o qual serão requisitados os dados
   * @returns Observable com todos os objetos cadastrados
   */
  public readAll(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.API_URL}/${endpoint}`);
  }

  /**
   * Obtém um registro com o ID específicado no parâmetro da função
   * @param endpoint Endpoint da API para o qual serão requisitados os dados
   * @param recordId ID do registro a ser retornado pela API
   * @returns Registro com o ID correpondente passado como parâmetro
   */
  public readById(endpoint: string, recordId: number): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${endpoint}/${recordId}`);
  }
}
