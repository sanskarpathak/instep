import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isStudentDashboardActive: boolean = false;
  isMentorDashbordActive: boolean = false;
  mentorFeatures:string[]=['mentor-dashboard','manage-internships','manage-applied-internships']
  studentFeatures:string[]=['student-dashboard','travel','applied-internships']
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((event:any) => {
      if (event.routerEvent instanceof NavigationEnd) {
        // console.log("Event :", event)
        let urlAfterRedirect = event.routerEvent.urlAfterRedirects.split('/')
        urlAfterRedirect= urlAfterRedirect[urlAfterRedirect.length-1]
        console.log("urlAfterRedirect :", urlAfterRedirect)
        this.isStudentDashboardActive = this.studentFeatures.some(feature => urlAfterRedirect == feature);
        console.log(this.isStudentDashboardActive)
        this.isMentorDashbordActive = this.mentorFeatures.some(feature => urlAfterRedirect == feature);
      }
    });
  }
}
