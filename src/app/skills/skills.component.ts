// import {
//   matfAngularColored,
//   matfDatabaseColored,
//   matfFirebaseColored,
//   matfJavaColored,
//   matfJavascriptColored,
//   matfMatlabColored,
//   matfPythonColored,
//   matfReactTsColored,
// } from '@ng-icons/material-file-icons/colored';

import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    {
      title: 'Angular',
      description:
        'Proficient in building web applications using Angular framework.',
      icon: 'matfAngularColored',
    },
    {
      title: 'Javascript',
      description:
        'Expert in JavaScript and modern JavaScript libraries and frameworks.',
      icon: 'matfJavascriptColored',
    },
  ];
}
