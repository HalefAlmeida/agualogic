import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aquarium } from '../models/aquarium';

@Injectable({
  providedIn: 'root',
})
export class HttpService<T> {
  private readonly API_URL: string = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  /**
   * Obtém um Observable com todos os objetos cadastrados na URL informada
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

  /**
   * Cria um novo objeto na base de dados
   * @param ENDPOINT Endpoint a ser utilizado para salvar o novo registro
   * @param record Objeto a ser criado na base de dados
   */
  public create(endpoint: string, record: T): Observable<T> {
    return this.http.post<T>(`${this.API_URL}/${endpoint}`, record);
  }

  /**
   *Realiza a exclusão de um registro existente na base de dados
   * @param endpoint Endpoint a ser utilizado para exclusão do registro
   * @param recordID ID do registro a ser excluído
   * @returns Observable com o registro excluído
   */
  public delete(endpoint: string, recordID: number): Observable<T> {
    return this.http.delete<T>(`${this.API_URL}/${endpoint}/${recordID}`);
  }

  /**
   * Atualiza um registro existente na base de dados
   * @param endpoint Endpoint a ser utilizado para a atualização do registro
   * @param recordID Id do registro a ser atualizado
   * @param record Corpo do objeto com as atualizações realizadas
   * @returns Observable com o registro atualizado
   */
  public update(endpoint: string, recordID: number, record: T): Observable<T> {
    return this.http.put<T>(`${this.API_URL}/${endpoint}/${recordID}`, record);
  }
}
