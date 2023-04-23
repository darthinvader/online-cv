import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, ExperienceComponent, EducationComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
