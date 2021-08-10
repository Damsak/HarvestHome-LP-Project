import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorCropsComponent } from './monitor-crops/monitor-crops.component';
import { MonitorRoutingModule } from './monitor-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { MaintainCropsComponent } from './maintain-crops/maintain-crops.component';
import { CreateMaintenancePlansComponent } from './create-maintenance-plans/create-maintenance-plans.component';
import { EditMaintenancePlansComponent } from "./edit-maintenance-plans/edit-maintenance-plans.component";


@NgModule({
  declarations: [  
    MonitorCropsComponent,
    MaintainCropsComponent,
    CreateMaintenancePlansComponent,
    EditMaintenancePlansComponent
  ],
  exports:[  
    MonitorRoutingModule,
    MonitorCropsComponent,
  ], 
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    GraphQLModule,
    RouterModule,
    CarouselModule

  ]
})
export class MonitorModule { }