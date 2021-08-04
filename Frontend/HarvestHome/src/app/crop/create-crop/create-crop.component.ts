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

  constructor(private router: Router,private cropService: CropService) { }

  ngOnInit(): void {
  }

  navigatetoCropList() {
    this.router.navigate(['/croplist'])
  }


  getCropValues(values:any){

    this.cropService.onAdd(values).subscribe((data) => {
      this.router.navigate(['/croplist'])
    });

    
  }

}
