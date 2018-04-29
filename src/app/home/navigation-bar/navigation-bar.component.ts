import { Component, OnInit } from '@angular/core';
import { NavHeatMapService } from '../../services/nav-heat-map.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  title = 'Hackathon';
  view: string;

  constructor(private navHeatMapService: NavHeatMapService) { }

  ngOnInit() {
    this.navHeatMapService.currentView.subscribe(view => {
      this.view = view;
      console.log('view changed', this.view);
    });
  }

  changeView(view: string) {
    this.navHeatMapService.changeView(view);
  }

}
