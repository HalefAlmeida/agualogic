import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chapter } from '../models/chapter';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  private readonly API_URL: string = `${environment.API_URL}/chapter`;

  constructor(private http: HttpClient) {}

  /**
   * Obtem um Observable com todos os objetos cadastrados na URL informada
   * @returns Observable com todos os objetos cadastrados
   */
  public readAll(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.API_URL);
  }

  /**
   * Obtém um registro com o ID específicado no parâmetro da função
   * @param recordId ID do registro a ser retornado pela API
   * @returns Registro com o ID correpondente passado como parâmetro
   */
  public readById(recordId: number): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.API_URL}/${recordId}`);
  }
}
