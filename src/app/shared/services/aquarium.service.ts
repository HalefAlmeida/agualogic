import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aquarium } from '../models/aquarium';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AquariumService {
  private readonly ENDPOINT: string = 'aquarium';

  constructor(private http: HttpService<Aquarium>) {}

  public readAll(): Observable<Aquarium[]> {
    return this.http.readAll(this.ENDPOINT);
  }

  public readById(recordId: number): Observable<Aquarium> {
    return this.http.readById(this.ENDPOINT, recordId);
  }
}
