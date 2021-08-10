import { Component, OnInit } from '@angular/core';
//import owners from '../data/pets.json';
import {Router} from "@angular/router";
import { CropService } from '../crop.service';


@Component({
  selector: 'ac-create-crop',
  templateUrl: './create-crop.component.html',
  styleUrls: ['./create-crop.component.scss']
})
export class CreateCropComponent implements OnInit {

  formstatus:boolean = false;

  constructor(private router: Router,private cropService: CropService) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(['/homegarden'])
  }


  getCropValues(values:any){

    if((values.crop == '') || (values.GardenId == '') ||( values.soilMoisture == '') || (values.airTemperature == '' )|| (values.fertilizerLevels == '' )) {
      this.formstatus = true; 
    } else {
    this.cropService.onAdd(values).subscribe((data) => {
      this.router.navigate(['/croplist']).then(() => {
        window.location.reload();
      });
    });
  }
  }

}
