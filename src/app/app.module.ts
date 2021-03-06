import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NewPostingComponent } from './new-posting/new-posting.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewPostingsComponent } from './view-postings/view-postings.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPostingComponent,
    WelcomeComponent,
    ViewPostingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
