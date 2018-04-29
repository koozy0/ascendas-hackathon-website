import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavHeatMapService {

  private viewSource = new BehaviorSubject<string>('live');
  currentView = this.viewSource.asObservable();

  constructor() { }

  changeView(view: string) {
    this.viewSource.next(view);
  }

}
