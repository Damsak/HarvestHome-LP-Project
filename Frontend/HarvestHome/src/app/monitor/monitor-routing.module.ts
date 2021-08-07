import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/keycloak.guard";
import {MonitorCropsComponent} from './monitor-crops/monitor-crops.component';

const routes: Routes = [
    { path:'monitorgarden', component:MonitorCropsComponent , canActivate:[AuthGuard]},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class MonitorRoutingModule {}