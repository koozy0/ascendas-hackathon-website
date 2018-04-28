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
    this.url = 'localhost:3000/cameras';
  }

  get(): Observable<Camera> {
    return this.http.get<Camera>(this.url);
  }

}
