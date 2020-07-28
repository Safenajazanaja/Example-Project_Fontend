import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ConfigServerService} from './core/config-server.service';
import { ModuleRoutingModule }from './module/module.routing.module'
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './module/main-page/main-page.component';
import { LoginComponent } from './module/login/login.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [ConfigServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
