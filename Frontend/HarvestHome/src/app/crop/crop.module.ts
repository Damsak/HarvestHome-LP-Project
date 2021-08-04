import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCropComponent } from './edit-crop/edit-crop.component';
import { CreateCropComponent } from './create-crop/create-crop.component';
import { ListCropComponent } from './list-crop/list-crop.component';
import { CropRoutingModule } from './crop-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    EditCropComponent,
    CreateCropComponent,
    ListCropComponent,
  ],
  exports:[  
    CropRoutingModule,
    EditCropComponent,
    CreateCropComponent,
    ListCropComponent,

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
export class CropModule { }
