import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Camera } from '../camera';

@Injectable()
export class CameraDataService {
  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:3000';
  }

  get(view): Observable<Camera[]> {
    const url = `${this.url}/${view}`;
    return this.http.get<Camera[]>(url);
  }

}
