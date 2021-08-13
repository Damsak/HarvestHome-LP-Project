import { Component, OnInit } from '@angular/core';
import { CropService } from 'src/app/crop/crop.service';
import { Crop } from 'src/app/crop/models/crop';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.scss']
})
export class ProfitComponent implements OnInit {

  allCrops:Crop[] = [];
  totalCropRecords:number = 0;
  totalcost:number = 0;

  finalValues: string[] = [];


  constructor(private cropService:CropService) { }

  ngOnInit(): void {

    this.cropService.onGet().subscribe((data) => {
    this.allCrops = data.data.getAllCrops;



      this.totalCropRecords = Object.keys(this.allCrops).length;
      var totalValues = new Array(this.totalCropRecords); 
      for(var i = 0; i < this.totalCropRecords; i++) {

        totalValues[i] = (this.allCrops[i].amount)*(this.allCrops[i].unitPrice)
        this.totalcost = totalValues[i] + this.totalcost
        this.finalValues.push("Crop - " + this.allCrops[i].crop + " Cost - " + totalValues[i])

      }
    });


    



  }

}
