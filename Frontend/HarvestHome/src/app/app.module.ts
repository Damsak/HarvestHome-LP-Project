import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { GardenModule } from './garden/garden.module';
import { RouterModule } from '@angular/router';
import { MonitorModule } from './monitor/monitor.module';
import { CropModule } from './crop/crop.module';


import { HomeComponent } from './home/home.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DefaultModule } from './Informationlayouts/default/default.module';
import { InformationModule } from './Informationmodules/information.module'


import { AppRoutingModule } from './app-routing.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './auth/app.init'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    InformationModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    // DefaultModule,
    FormsModule,
    GardenModule,
    MonitorModule,
    CropModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    KeycloakAngularModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }


//VALUE - Nh3M64c-VN__qPp-0~~qrCKrOgxP9y3aXW
//SECRET ID - b170b5ff-11f7-4868-8374-f69c5ae479fb