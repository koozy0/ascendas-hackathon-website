import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.css']
})
export class RippleComponent implements OnInit {
  @Input() button: string;

  constructor() { }

  ngOnInit() {
  }

}
