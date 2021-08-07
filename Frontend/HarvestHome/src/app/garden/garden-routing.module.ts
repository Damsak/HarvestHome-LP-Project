import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import {CreateGardenComponent} from './create-garden/create-garden.component';
import {EditGardenComponent} from './edit-garden/edit-garden.component';
import {ListGardenComponent} from './list-garden/list-garden.component';
import { HomeGardenComponent } from "./home-garden/home-garden.component";
import { CropsGardenComponent } from './crops-garden/crops-garden.component';
import { AuthGuard } from "../auth/keycloak.guard";


const routes: Routes = [
    { path:'homegarden', component:HomeGardenComponent, canActivate:[AuthGuard] },
    { path:'gardenlist' , component:ListGardenComponent , canActivate:[AuthGuard]},
    { path:'gardencreate', component:CreateGardenComponent , canActivate:[AuthGuard]},
    { path:'gardenedit/:id' , component:EditGardenComponent, canActivate:[AuthGuard]}, 
    { path:'gardencrops', component: CropsGardenComponent, canActivate:[AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class GardenRoutingModule {}