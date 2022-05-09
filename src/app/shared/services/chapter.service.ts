import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chapter } from '../models/chapter';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  private readonly ENDPOINT: string = 'chapter';

  constructor(private http: HttpService<Chapter>) {}

  /**
   * Obtem um Observable com todos os objetos cadastrados na URL informada
   * @returns Observable com todos os objetos cadastrados
   */
  public readAll(): Observable<Chapter[]> {
    return this.http.readAll(this.ENDPOINT);
  }

  /**
   * Obtém um registro com o ID específicado no parâmetro da função
   * @param recordId ID do registro a ser retornado pela API
   * @returns Registro com o ID correpondente passado como parâmetro
   */
  public readById(recordId: number): Observable<Chapter> {
    return this.http.readById(this.ENDPOINT, recordId);
  }
}
