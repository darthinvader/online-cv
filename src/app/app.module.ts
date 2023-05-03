import {
  bootstrapFileEarmarkPdfFill,
  bootstrapGithub,
  bootstrapLinkedin,
} from '@ng-icons/bootstrap-icons';
import {
  matfAngularColored,
  matfDatabaseColored,
  matfFirebaseColored,
  matfJavaColored,
  matfMatlabColored,
  matfPythonColored,
  matfReactTsColored,
  matfTypescriptColored,
} from '@ng-icons/material-file-icons/colored';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { ContainerComponent } from './container/container.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      bootstrapLinkedin,
      bootstrapGithub,
      bootstrapFileEarmarkPdfFill,
      matfAngularColored,
      matfDatabaseColored,
      matfFirebaseColored,
      matfJavaColored,
      matfMatlabColored,
      matfPythonColored,
      matfReactTsColored,
      matfTypescriptColored,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
