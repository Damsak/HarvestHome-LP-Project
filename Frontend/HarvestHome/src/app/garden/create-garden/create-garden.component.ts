import { Component, OnInit } from '@angular/core';
//import owners from '../data/pets.json';
import {Router} from "@angular/router";
import { GardenService } from '../garden.service';


@Component({
  selector: 'ac-create-garden',
  templateUrl: './create-garden.component.html',
  styleUrls: ['./create-garden.component.scss']
})
export class CreateGardenComponent implements OnInit {

  constructor(private router: Router,private gardenService: GardenService) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(['/homegarden'])
  }

  // getGardenValues(values:any){
  //   console.log(values);


  //   this.gardenService.onAdd(values);
    
  //   // owners.push(values);
  //   //this.router.navigate(['/ownerlist'])
    
  // }

  getGardenValues(values:any){
    console.log(values);

    this.gardenService.onAdd(values).subscribe((data) => {
      this.router.navigate(['/gardenlist'])
    });

    
  }

}
