import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { MonitorService } from '../monitor.service';


@Component({
  selector: 'ac-create-maintenance-plans',
  templateUrl: './create-maintenance-plans.component.html',
  styleUrls: ['./create-maintenance-plans.component.scss']
})
export class CreateMaintenancePlansComponent implements OnInit {

  formstatus:boolean = false;  

  constructor(private router: Router,private monitorService: MonitorService) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(['/maintaingarden'])
  }


  getMaintainValues(values:any){

    if((values.plan == '') || (values.removeWeeds == '') ||( values.activity == '') || (values.waterlevel == '' )|| (values.requiredTimeInMins == '' )) {
      this.formstatus = true; 
    } else {

    this.monitorService.onAdd(values).subscribe((data) => {
      this.router.navigate(['/maintaingarden']).then(() => {
        window.location.reload();
      });
    });
  } 
  }

}
