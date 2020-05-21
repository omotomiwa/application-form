import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyComponent } from './apply/apply.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ApplyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
