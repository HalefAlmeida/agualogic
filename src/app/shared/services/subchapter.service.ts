import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subchapter } from '../models/subchapter';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SubchapterService {
  private readonly ENDPOINT: string = 'subchapter';

  constructor(private http: HttpService<Subchapter>) {}

  readAll(): Observable<Subchapter[]> {
    return this.http.readAll(this.ENDPOINT);
  }

  readById(recordID: number): Observable<Subchapter> {
    return this.http.readById(this.ENDPOINT, recordID);
  }
}
