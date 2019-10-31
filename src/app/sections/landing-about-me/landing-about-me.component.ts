import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-about-me',
  templateUrl: './landing-about-me.component.html',
  styleUrls: ['./landing-about-me.component.scss']
})
export class LandingAboutMeComponent implements OnInit {

  @Input() public heading: string;
  @Input() public subHeading: string;
  @Input() public callToActionText: string;

  constructor() { }

  ngOnInit() {
  }

}
