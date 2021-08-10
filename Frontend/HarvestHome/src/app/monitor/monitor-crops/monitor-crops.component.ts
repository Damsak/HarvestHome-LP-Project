import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CropService } from 'src/app/crop/crop.service';
import { Crop } from 'src/app/crop/models/crop';
import { MonitorService } from '../monitor.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-monitor-crops',
  templateUrl: './monitor-crops.component.html',
  styleUrls: ['./monitor-crops.component.scss']
})
export class MonitorCropsComponent implements OnInit {

  constructor(private router: Router,private monitorService:MonitorService, private cropService:CropService) { }

  allSensorRecords:any;
  totalSensorRecords:number=0;
  totalCrops:number=0;
  finalaverageSoilMoisture:number = 0;
  finalaverageAirTemperature:number = 0;
  finalaverageFertilizerLevels:number = 0;
  allCrops:Crop[] = [];
  cropInfo:any = [];
  loaded:boolean = false;
 

  ngOnInit(): void {

    //get the necessary factors from the service and set average levels
    this.monitorService.onGetAverageFactors().subscribe((data) => {

    this.allSensorRecords = data.data.getAllMonitorRecords;

    this.totalSensorRecords = Object.keys(this.allSensorRecords).length;

      for(var i = 0; i < this.totalSensorRecords; i++) {
        var obj = this.allSensorRecords[i];
        this.finalaverageSoilMoisture =  obj.soilMoisture + this.finalaverageSoilMoisture; 
        this.finalaverageAirTemperature =  obj.airTemperature + this.finalaverageAirTemperature; 
        this.finalaverageFertilizerLevels =  obj.fertilizerLevels + this.finalaverageFertilizerLevels;      
    }
    this.finalaverageSoilMoisture = this.finalaverageSoilMoisture/this.totalSensorRecords;
    this.finalaverageAirTemperature =   this.finalaverageAirTemperature/this.totalSensorRecords; 
    this.finalaverageFertilizerLevels =  this.finalaverageFertilizerLevels/this.totalSensorRecords;   
})  


//loop through the available crops to indentify the ones which need to be changed 
    this.cropService.onGet().subscribe((data) => {

      console.log("FinalaveragesoilMois = " + this.finalaverageSoilMoisture)

      if(this.finalaverageSoilMoisture == 0) {
        window.location.reload()
      } else {
        this.loaded = true;
        this.allCrops = data.data.getAllCrops;

      this.totalCrops = Object.keys(this.allCrops).length;

      for(var j = 0; j < this.totalCrops; j++) {

        var singleCropData = {
          "id": 0,
          "crop": "",
          "soilMoistureOffset":0,
          "airTemperatureOffset":0,
          "fertilizerLevelsOffset":0,
          "severity":"Not Severe"
        };

        var count = 0;

        singleCropData.id = this.allCrops[j].id;
        singleCropData.crop = this.allCrops[j].crop;

      
        //check soil Moisture level for each crop
        if(this.allCrops[j].soilMoisture >  this.finalaverageSoilMoisture) {
          count++;
          //needed soil moisture is higher than the current average soil moisture
          singleCropData.soilMoistureOffset = (this.allCrops[j].soilMoisture - this.finalaverageSoilMoisture);
          console.log(" Soil Moisture, crop need " + this.allCrops[j].soilMoisture + " Average  " + this.finalaverageSoilMoisture)
        }


        if(this.allCrops[j].airTemperature >  this.finalaverageAirTemperature) {
          count++;
        //needed air temperature is higher than the current average air temperature
        singleCropData.airTemperatureOffset = (this.allCrops[j].airTemperature - this.finalaverageAirTemperature);
        console.log("Air Temperature,crop need " + this.allCrops[j].airTemperature + " Average  " + this.finalaverageAirTemperature)
        }

        if(this.allCrops[j].fertilizerLevels >  this.finalaverageFertilizerLevels) {
          count++;
          singleCropData.fertilizerLevelsOffset = (this.allCrops[j].fertilizerLevels - this.finalaverageFertilizerLevels);
          console.log("Fertilizer levels,crop need " + this.allCrops[j].fertilizerLevels + " Average  " + this.finalaverageFertilizerLevels)
        }

        //calculate the severity based on the number of factors with issues
        if( count == 1 ) {
          singleCropData.severity = "Low"
          this.cropInfo.push(singleCropData)
        } else if ( count == 2) {
          singleCropData.severity = "Medium"
          this.cropInfo.push(singleCropData)
        } else  if ( count == 3) {
          singleCropData.severity = "High"
          this.cropInfo.push(singleCropData)
        }
      }      
    }
    });
  }

  navigateBack() {
    this.router.navigate(['/'])
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
    nav: false
  }

}
