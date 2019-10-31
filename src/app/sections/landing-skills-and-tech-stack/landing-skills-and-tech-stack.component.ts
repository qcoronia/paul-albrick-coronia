import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-skills-and-tech-stack',
  templateUrl: './landing-skills-and-tech-stack.component.html',
  styleUrls: ['./landing-skills-and-tech-stack.component.scss']
})
export class LandingSkillsAndTechStackComponent implements OnInit {

  @Input() public heading: string;
  @Input() public subHeading: string;
  @Input() public callToActionText: string;

  constructor() { }

  ngOnInit() {
  }

}
