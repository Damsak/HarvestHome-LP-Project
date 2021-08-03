import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MonitorService } from '../monitor.service'

@Component({
  selector: 'app-monitor-crops',
  templateUrl: './monitor-crops.component.html',
  styleUrls: ['./monitor-crops.component.scss']
})
export class MonitorCropsComponent implements OnInit {

  constructor(private monitorService:MonitorService) { }

  allSensorRecords:any;
  finalaverageSoilMoisture:number = 0;
  finalaverageAirTemperature:number = 0;
  finalaverageFertilizerLevels:number = 0;

  ngOnInit(): void {


    // this.monitorService.onGet().subscribe((data) => {


    //   this.allSensorRecords = data.data.getAllMonitorRecords;
    //   console.log("Came to " + JSON.stringify(this.allSensorRecords));
    // });  


    //get the necessary factors from the service and set average levels
    this.monitorService.onGetAverageFactors().subscribe((data) => {
    this.allSensorRecords = data.data.getAllMonitorRecords;
    

      for(var i = 0; i < this.allSensorRecords.length; i++) {
        var obj = this.allSensorRecords[i];

        this.finalaverageSoilMoisture =  obj.soilMoisture + this.finalaverageSoilMoisture; 
        this.finalaverageAirTemperature =  obj.airTemperature + this.finalaverageAirTemperature; 
        this.finalaverageFertilizerLevels =  obj.fertilizerLevels + this.finalaverageFertilizerLevels;      
    }

    this.finalaverageSoilMoisture = this.finalaverageSoilMoisture/this.allSensorRecords.length;
    this.finalaverageAirTemperature =   this.finalaverageAirTemperature/this.allSensorRecords.length; 
    this.finalaverageFertilizerLevels =  this.finalaverageFertilizerLevels/this.allSensorRecords.length; 


    console.log("Av "+  this.finalaverageSoilMoisture);   
    });  

    // this.finalaverageSoilMoisture =  this.monitorService.OnGetSoilMoisture()
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
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
