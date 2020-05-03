import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store-dezzapps';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    if (isPlatformBrowser(this.platformId)) {
      const navEndEvents$ = this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd)
        );
      navEndEvents$.subscribe((event: NavigationEnd) => {
        gtag('config', 'UA-25569860-3', {
          page_path: event.urlAfterRedirects
        });
      });

    }
  }

}
