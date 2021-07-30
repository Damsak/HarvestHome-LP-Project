import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import {CreateGardenComponent} from './create-garden/create-garden.component';
import {EditGardenComponent} from './edit-garden/edit-garden.component';
import {ListGardenComponent} from './list-garden/list-garden.component';
import { HomeGardenComponent } from "./home-garden/home-garden.component";


const routes: Routes = [
    { path:'homegarden', component:HomeGardenComponent},
    { path:'gardenlist' , component:ListGardenComponent},
    { path:'gardencreate', component:CreateGardenComponent},
    { path:'gardenedit/:id' , component:EditGardenComponent}, 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class GardenRoutingModule {}