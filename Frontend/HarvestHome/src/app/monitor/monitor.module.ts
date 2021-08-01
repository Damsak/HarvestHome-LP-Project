import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorCropsComponent } from './monitor-crops/monitor-crops.component';
import { MonitorRoutingModule } from './monitor-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [  
    MonitorCropsComponent,
  ],
  exports:[  
    MonitorRoutingModule,
    MonitorCropsComponent
   
  ], 
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    GraphQLModule,
    RouterModule,
    CarouselModule

  ]
})
export class MonitorModule { }