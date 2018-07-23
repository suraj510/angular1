import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Aboutcomponant } from './aboutnew/aboutnew.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';

const sroutes:Routes=[
  {path:'aboutnew',component:Aboutcomponant},
  {path:'home',component:HomeComponent}
  ] 

@NgModule({
  declarations: [
    AppComponent,
    Aboutcomponant,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(sroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
