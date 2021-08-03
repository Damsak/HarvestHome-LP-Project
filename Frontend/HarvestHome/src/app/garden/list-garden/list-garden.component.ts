import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {gql,Apollo} from 'apollo-angular';
import { Garden } from '../models/garden';
import { GardenService } from '../garden.service';


@Component({
  selector: 'ac-list-garden',
  templateUrl: './list-garden.component.html',
  styleUrls: ['./list-garden.component.scss']
})
export class ListGardenComponent implements OnInit {

  allGardens:Garden[] = [];
  Garden:any;

  constructor(private router: Router,private apollo:Apollo, private gardenService:GardenService) { }

  ngOnInit(): void {

      this.gardenService.onGet().subscribe((data) => {
      this.allGardens = data.data.getAllGardens;
    });
  }

  editGarden(id:number){
    this.router.navigate(['/gardenedit', id])
  }

  onDelete(id:number){

    this.gardenService.onDelete(id.toString()).subscribe((data) => {
          
      this.Garden = data;

      console.log(JSON.stringify(this.Garden))

    },
    err => console.log(err)
  );
    //reload page after delete
    window.location.reload();
  }

}
