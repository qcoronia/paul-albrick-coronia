import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() public salutation: string;
  @Input() public bannerTitle: string;
  @Input() public subtitle: string;
  @Input() public caption: string;

  constructor() { }

  ngOnInit() {
  }

}
