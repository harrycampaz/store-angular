import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) {}

  logout() {

    this.authService.logout().then(response => {
     console.log('Cerrada');
     this.router.navigate(['/']);
    }, error => {
      console.log('problemas');
    }).catch(error => {
      console.log('Problemas al cerrar');

    });

  }

}
