import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/keycloak.guard";
import { MonitorCropsComponent } from './monitor-crops/monitor-crops.component';
import { MaintainCropsComponent } from "./maintain-crops/maintain-crops.component";
import { CreateMaintenancePlansComponent } from "./create-maintenance-plans/create-maintenance-plans.component";
import { EditMaintenancePlansComponent } from "./edit-maintenance-plans/edit-maintenance-plans.component";

const routes: Routes = [
    { path:'monitorgarden', component:MonitorCropsComponent ,canActivate:[AuthGuard] },
    { path:'maintaingarden', component:MaintainCropsComponent ,canActivate:[AuthGuard]},
    { path:'createMaintenancePlan', component: CreateMaintenancePlansComponent,canActivate:[AuthGuard]},
    { path: 'editMaintenancePlan/:id', component: EditMaintenancePlansComponent,canActivate:[AuthGuard]}

    // { path:'monitorgarden', component:MonitorCropsComponent},
    // { path:'maintaingarden', component:MaintainCropsComponent },
    // { path:'createMaintenancePlan', component: CreateMaintenancePlansComponent},
    // { path: 'editMaintenancePlan/:id', component: EditMaintenancePlansComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class MonitorRoutingModule {}