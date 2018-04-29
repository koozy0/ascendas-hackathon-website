import { TestBed, inject } from '@angular/core/testing';

import { NavHeatMapService } from './nav-heat-map.service';

describe('NavHeatMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavHeatMapService]
    });
  });

  it('should be created', inject([NavHeatMapService], (service: NavHeatMapService) => {
    expect(service).toBeTruthy();
  }));
});
