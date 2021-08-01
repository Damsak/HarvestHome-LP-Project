import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import {MonitorCropsComponent} from './monitor-crops/monitor-crops.component';



const routes: Routes = [
    { path:'monitorgarden', component:MonitorCropsComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class MonitorRoutingModule {}