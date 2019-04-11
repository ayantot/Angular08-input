import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    DeveloperComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
