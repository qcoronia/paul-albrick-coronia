import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-short-banner',
  templateUrl: './short-banner.component.html',
  styleUrls: ['./short-banner.component.scss']
})
export class ShortBannerComponent implements OnInit {

  @Input() public salutation: string;
  @Input() public bannerTitle: string;
  @Input() public subtitle: string;
  @Input() public caption: string;

  constructor() { }

  ngOnInit() {
  }

}
