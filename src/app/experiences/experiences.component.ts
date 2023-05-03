import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Corp.',
      date: '2020 - Present',
      description:
        'Responsible for developing responsive web applications using modern technologies.',
    },
    {
      title: 'Web Developer',
      company: 'Creative Agency',
      date: '2018 - 2020',
      description:
        'Developed and maintained client websites, optimized for performance and usability.',
    },
    // Add more experiences here...
  ];
}
