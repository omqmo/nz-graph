import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NzGraphModule } from "ng-zorro-antd/graph";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NzGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
