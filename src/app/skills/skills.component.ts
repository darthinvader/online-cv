import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    {
      title: 'Javascript/Typescript',
      description:
        'Expert in JavaScript and modern JavaScript libraries and frameworks.',
      icon: 'matfTypescriptColored',
    },
    {
      title: 'Angular',
      description:
        'Proficient in building web applications using Angular framework.',
      icon: 'matfAngularColored',
    },
    {
      title: 'React',
      description:
        'Proficient in building web applications using React framework.',
      icon: 'matfReactTsColored',
    },
    {
      title: 'Databases / SQL',
      description: 'Proficient in SQL utilization and Databases.',
      icon: 'matfDatabaseColored',
    },
    {
      title: 'Firebase',
      description: "Proficient in using Firebase's firestore.",
      icon: 'matfFirebaseColored',
    },
    {
      title: 'Matlab',
      description: 'Proficient in Matlab for Math/Research purposes.',
      icon: 'matfMatlabColored',
    },
    {
      title: 'Python',
      description: 'Proficient in Python for rapid prototyping.',
      icon: 'matfPythonColored',
    },
    {
      title: 'Java',
      description: 'Proficient in Java for Application.',
      icon: 'matfJavaColored',
    },
  ];
}
