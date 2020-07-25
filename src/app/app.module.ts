import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './component/firs.component';
import { Container1Component } from './container1/container1.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    Container1Component,
    HelloWorld,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
