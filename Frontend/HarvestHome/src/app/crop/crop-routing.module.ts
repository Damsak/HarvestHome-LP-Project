import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import {CreateCropComponent} from './create-crop/create-crop.component';
import {EditCropComponent} from './edit-crop/edit-crop.component';
import {ListCropComponent} from './list-crop/list-crop.component';
import { HomeCropComponent } from "./home-crop/home-crop.component";
// import { CropsGardenComponent } from './crops-garden/crops-garden.component';


const routes: Routes = [
    { path:'homecrop', component:HomeCropComponent},
    { path:'croplist' , component:ListCropComponent},
    { path:'cropcreate', component:CreateCropComponent},
    { path:'cropedit/:id' , component:EditCropComponent}, 
    // { path:'gardencrops', component: CropsGardenComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class CropRoutingModule {}