import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import this module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TravelComponent } from './travel/travel.component';
import { AppliedInternshipsComponent } from './applied-internships/applied-internships.component';
import { ManageInternshipsComponent } from './manage-internships/manage-internships.component';
import { ManageClaimsComponent } from './manage-claims/manage-claims.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentDashboardComponent,
    MentorDashboardComponent,
    HeaderComponent,
    TravelComponent,
    AppliedInternshipsComponent,
    ManageInternshipsComponent,
    ManageClaimsComponent,
    SignupPageComponent,
    ScheduleInterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
