import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mySwiper: Swiper;

  // tslint:disable-next-line:ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      this.mySwiper = new Swiper('.swiper-container');
   }

  }

}
