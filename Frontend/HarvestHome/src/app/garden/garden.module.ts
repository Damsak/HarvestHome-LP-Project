import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditGardenComponent } from './edit-garden/edit-garden.component';
import { CreateGardenComponent } from './create-garden/create-garden.component';
import { ListGardenComponent } from './list-garden/list-garden.component';
import { CropsGardenComponent } from './crops-garden/crops-garden.component';
import { GardenRoutingModule } from './garden-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    EditGardenComponent,
    CreateGardenComponent,
    ListGardenComponent,
    CropsGardenComponent
  ],
  exports:[  
    GardenRoutingModule,
    EditGardenComponent,
    CreateGardenComponent,
    ListGardenComponent,
    CropsGardenComponent
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
export class GardenModule { }
