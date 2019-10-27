import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public headerText: string;
  public captionText: string;

  constructor() {
    this.headerText = 'Some Digital Stuffs';
    this.captionText = 'explore the contents that I made myself';
  }

  ngOnInit() {
  }

}
