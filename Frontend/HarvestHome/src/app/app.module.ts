import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GardenModule } from './garden/garden.module';
import { RouterModule } from '@angular/router';
import { MonitorModule } from './monitor/monitor.module';


import { HomeComponent } from './home/home.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './Informationlayouts/default/default.module';


import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [

    AppRoutingModule,
    DefaultModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    GardenModule,
    MonitorModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
