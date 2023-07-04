import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TravelComponent } from './travel/travel.component';
import { AppliedInternshipsComponent } from './applied-internships/applied-internships.component';

@NgModule({
  imports: [ReactiveFormsModule, BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    LoginComponent,
    StudentDashboardComponent,
    MentorDashboardComponent,
    HeaderComponent,
    TravelComponent,
    AppliedInternshipsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
