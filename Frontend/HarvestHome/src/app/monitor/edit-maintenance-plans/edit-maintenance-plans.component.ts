import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { MonitorService } from '../monitor.service';
import { Maintain } from '../models/maintain';
import { gql,Apollo } from 'apollo-angular';


@Component({
  selector: 'ac-edit-maintenance-plans',
  templateUrl: './edit-maintenance-plans.component.html',
  styleUrls: ['./edit-maintenance-plans.component.scss']
})
export class EditMaintenancePlansComponent implements OnInit {

    id:any;
    plan:any;
    removeWeeds:any;
    activity:any;
    waterlevel:any;
    requiredTimeInMins:any;
    paramId: any;
    private sub: any;
    finalPlan: any;

    planToBeUpdated:any;
    formstatus:boolean = false;  



  constructor(private router: Router,private route: ActivatedRoute, private monitorService: MonitorService,private apollo:Apollo) {
   }

  ngOnInit(): void{

      this.sub = this.route.params.subscribe(params => {
      this.paramId = params['id'];
    });

    if (this.paramId) {

    this.monitorService.onGetMaintainPlan(this.paramId).subscribe((data) => { 
        this.id = data.data.MaintainRecord.id;
        this.plan = data.data.MaintainRecord.plan
        this.removeWeeds = data.data.MaintainRecord.removeWeeds
        this.activity = data.data.MaintainRecord.activity
        this.waterlevel = data.data.MaintainRecord.waterlevel
        this.requiredTimeInMins = data.data.MaintainRecord.requiredTimeInMins
          },
          err => console.log(err)
        )
    }
  }

  updatePlan(values:any){
    
    if((values.plan == '') || (values.removeWeeds == '') ||( values.activity == '') || (values.waterlevel == '' )|| (values.requiredTimeInMins == '' )) {
      this.formstatus = true; 
    } else {
    this.monitorService.onUpdateMaintain(values).subscribe((data) => {
      this.router.navigate(['/maintaingarden']).then(() => {
        window.location.reload();
      });
    });
  }
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  navigateBack() {
    this.router.navigate(['/maintaingarden'])
  }

}
