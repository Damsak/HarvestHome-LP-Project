import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditGardenComponent } from './edit-garden/edit-garden.component';
import { CreateGardenComponent } from './create-garden/create-garden.component';
import { ListGardenComponent } from './list-garden/list-garden.component';
import { GardenRoutingModule } from './garden-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';


@NgModule({
  declarations: [
    EditGardenComponent,
    CreateGardenComponent,
    ListGardenComponent,
  ],
  exports:[  
    GardenRoutingModule,
    EditGardenComponent,
    CreateGardenComponent,
    ListGardenComponent
  ], 
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    GraphQLModule,
    RouterModule,

  ]
})
export class GardenModule { }
