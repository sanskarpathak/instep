import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { TravelComponent } from './travel/travel.component';
import { ManageInternshipsComponent } from './manage-internships/manage-internships.component';
import { AppliedInternshipsComponent } from './applied-internships/applied-internships.component';
import { ManageClaimsComponent } from './manage-claims/manage-claims.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'mentor-dashboard', component: MentorDashboardComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'manage-internships', component: ManageInternshipsComponent },
  { path: 'applied-internships', component: AppliedInternshipsComponent },
  { path: 'manage-claims', component: ManageClaimsComponent },
  { path: 'signup', component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
