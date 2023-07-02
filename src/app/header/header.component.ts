import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isStudentDashboardActive: boolean = false;

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((event:any) => {
      if (event.routerEvent instanceof NavigationEnd) {
        console.log("Event :", event)
        this.isStudentDashboardActive = event.routerEvent.urlAfterRedirects.includes('/student-dashboard');
      }
    });
  }
}
