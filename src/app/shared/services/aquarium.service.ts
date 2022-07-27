import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aquarium } from '../models/aquarium';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AquariumService {
  private readonly ENDPOINT: string = 'aquarium';

  constructor(private http: HttpService<Aquarium>) { }

  public readAll(): Observable<Aquarium[]> {
    return this.http.readAll(this.ENDPOINT);
  }

  public readById(recordId: number): Observable<Aquarium> {
    return this.http.readById(this.ENDPOINT, recordId);
  }

  private create(record: Aquarium): Observable<Aquarium> {
    return this.http.create(this.ENDPOINT, record);
  }

  private update(record: Aquarium): Observable<Aquarium> {
    return this.http.update(this.ENDPOINT, record.nr_sequencia, record);
  }

  public delete(recordID: number): Observable<Aquarium> {
    return this.http.delete(this.ENDPOINT, recordID);
  }

  /**
   * Verifica se o objeto deve ser salvo ou criado na base de dados
   * @param record Objeto a ser salvo
   */
  public save(record: Aquarium): Observable<Aquarium> {
    if (record.nr_sequencia) {
      return this.update(record);
    } else {
      return this.create(record);
    }
  }
}
