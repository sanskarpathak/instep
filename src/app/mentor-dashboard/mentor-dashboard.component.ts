import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mentor-dashboard',
  templateUrl: './mentor-dashboard.component.html',
  styleUrls: ['./mentor-dashboard.component.scss']
})
export class MentorDashboardComponent {
  
  internships = [{
    'student email': "abc@gmail.com",
    'project Id': "1",
    'Description': "This is an good internship ",
    'Student CGPA': 9.5
  },
  {
    'student email': "xyz@gmail.com",
    'project Id': "11",
    'Description': "This is an bad internship ",
    'Student CGPA': 5.5
  }];

  // constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchInternships();
  }

  fetchInternships() {
    // set internships dynamically by calling api 
  }

  setIntershipStatus(status: any) {
    console.log(status)
  }

  scheduleInterview(event: any) {
    console.log(event)
  }

}
