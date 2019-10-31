import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-graphics-and-illustrations',
  templateUrl: './landing-graphics-and-illustrations.component.html',
  styleUrls: ['./landing-graphics-and-illustrations.component.scss']
})
export class LandingGraphicsAndIllustrationsComponent implements OnInit {

  @Input() public heading: string;
  @Input() public subHeading: string;
  @Input() public callToActionText: string;

  constructor() { }

  ngOnInit() {
  }

}
