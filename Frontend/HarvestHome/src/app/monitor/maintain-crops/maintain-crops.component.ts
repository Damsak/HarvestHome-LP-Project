import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../monitor.service';
import {Router} from "@angular/router";
import { Maintain } from 'src/app/monitor/models/maintain';
import { CropService } from 'src/app/crop/crop.service';
import { Crop } from 'src/app/crop/models/crop';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-maintain-crop',
  templateUrl: './maintain-crops.component.html',
  styleUrls: ['./maintain-crops.component.scss']
})
export class MaintainCropsComponent implements OnInit {

  allMaintainPlans:Maintain[] = [];
  recommendedPlan: any;
  finalRecommendedPlan: any;
  numberOfPlans: number = 0;
  totalSoilMoistureNeeded:number = 0;
  totalAirTemperatureNeeded:number = 0;
  totalfertilizerLevelNeeded:number = 0;
  totalCropRecords:number = 0;
  complete:boolean = false;
  allCrops:Crop[] = [];


  constructor(private router: Router,  private monitorService:MonitorService,private cropService:CropService) { }

  ngOnInit(): void {

    this.cropService.onGet().subscribe((data) => {

      this.allCrops = data.data.getAllCrops;
      this.totalCropRecords = Object.keys(this.allCrops).length;

      for(var i = 0; i < this.totalCropRecords; i++) {

        this.totalSoilMoistureNeeded = this.allCrops[i].soilMoisture + this.totalSoilMoistureNeeded;
        this.totalAirTemperatureNeeded = this.allCrops[i].airTemperature + this.totalAirTemperatureNeeded;
        this.totalfertilizerLevelNeeded = this.allCrops[i].fertilizerLevels + this.totalfertilizerLevelNeeded;

      }

      //Assumption
      //Normally a garden contains less than 5 different crops.
      // If a garden contains more than 5 the crops need atleast 45 min(plan c) maintenance
      if(this.totalCropRecords > 5) {
        this.recommendedPlan = "C";
        console.log("Recommended Plan " + this.recommendedPlan)
      } else if ((this.totalSoilMoistureNeeded > 200) && (this.totalAirTemperatureNeeded > 200) && (this.totalfertilizerLevelNeeded > 200)){
        this.recommendedPlan = "B";
        console.log("Recommended Plan " + this.recommendedPlan)
      } else {
        this.recommendedPlan = "A";
        console.log("Recommended Plan " + this.recommendedPlan)
      }


      this.monitorService.onGetMaintain().subscribe((data) => {
        this.allMaintainPlans = data.data.getAllMaintainRecords;
        this.numberOfPlans = this.allMaintainPlans.length;

        for(var j = 0; j < this.numberOfPlans; j++) {

          if(this.allMaintainPlans[j].plan  === this.recommendedPlan) {        
            this.finalRecommendedPlan = this.allMaintainPlans[j]
            this.complete = true;
            
            console.log("Equalledd" +  JSON.stringify(this.finalRecommendedPlan));
            return;
          }
        }
      })
    })
  }


  navigateBack() {
    this.router.navigate(['/monitorgarden'])
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }


}
