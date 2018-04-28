import { Component, OnInit } from '@angular/core';
// Importing Model
import { Camera } from '../../camera';
// Importing Service
import { CameraDataService } from '../../services/camera-data.service';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {
  lat = 1.288332;
  lng = 103.783088;
  zoom = 18;
  cameras: Camera[] = [];

  constructor(
    private cameraData: CameraDataService
  ) { }

  ngOnInit() {
    const current = {
      place: 'CoSpace Park',
      lat: this.lat,
      lng: this.lng,
      count: 1,
      timestamp: new Date()
    };

    this.cameras.push(current);
  }

  getCameras() {
    this.cameraData.get()
      .subscribe(cameras => console.log(cameras));
  }

}
