import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent {
  internships: any[] = [
    {
      projectId: 1,
      description: 'Develop a bed management system',
      skillsGain: 'React, Spring Boot, Hibernate',
      prerequisite: 'Basic HTML and Core Java',
      duration: '3 months',
      mentorEmail: 'abcd@gmail.com',
    },
    {
      projectId: 2,
      description: 'Build a social media app',
      skillsGain: 'Angular, Node.js, MongoDB',
      prerequisite: 'JavaScript and CSS',
      duration: '2 months',
      mentorEmail: 'efgh@gmail.com',
    }
  ];

  filteredInternships: any[] = [];
  selectedDuration: string = '';
  
  ngOnInit() {
    this.filteredInternships = this.internships;
  }

  filterInternships() {
    if (this.selectedDuration) {
      this.filteredInternships = this.internships.filter(internship => internship.duration === this.selectedDuration);
    } else {
      this.filteredInternships = this.internships;
    }
  }

  applyForInternship(projectId: number) {
    // Perform the apply for internship logic
    console.log(`Applying for Internship with Project ID: ${projectId}`);
  }
}
