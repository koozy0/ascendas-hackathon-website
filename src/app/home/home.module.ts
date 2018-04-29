import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importing Angular Material Modules & Animations
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Importing Components
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { RippleComponent } from './ripple/ripple.component';
// Importing AGM
import { AgmCoreModule } from '@agm/core';
// Importing Service
import { CameraDataService } from '../services/camera-data.service';
import { NavHeatMapService } from '../services/nav-heat-map.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBl53HhhoGdxsz_2Kv8xvMqWtduiy-eKjY'
    }),
  ],
  declarations: [
    NavigationBarComponent,
    HeatMapComponent,
    RippleComponent,
  ],
  exports: [
    NavigationBarComponent,
    HeatMapComponent,
    RippleComponent,
  ],
  providers: [
    CameraDataService,
    NavHeatMapService,
  ]
})
export class HomeModule { }
