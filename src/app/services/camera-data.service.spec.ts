import { TestBed, inject } from '@angular/core/testing';

import { CameraDataService } from './camera-data.service';

describe('CameraDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CameraDataService]
    });
  });

  it('should be created', inject([CameraDataService], (service: CameraDataService) => {
    expect(service).toBeTruthy();
  }));
});
