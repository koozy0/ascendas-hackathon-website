import { Component, OnInit } from '@angular/core';
// Importing Model
import { Camera } from '../../camera';
// Importing Service
import { CameraDataService } from '../../services/camera-data.service';
import { NavHeatMapService } from '../../services/nav-heat-map.service';

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
  view: string;

  constructor(
    private cameraData: CameraDataService,
    private navHeatMapService: NavHeatMapService,
  ) { }

  ngOnInit() {
    this.navHeatMapService.currentView.subscribe(view => this.view = view);
    this.getCameras();
    this.getCamerasEveryInterval(5000);
  }

  getCamerasEveryInterval(interval) {
    setInterval(this.getCameras.bind(this), interval);
  }

  private getCameras() {
    this.cameraData.get(this.view)
      .subscribe(cameras => this.cameras = cameras);
  }

}
