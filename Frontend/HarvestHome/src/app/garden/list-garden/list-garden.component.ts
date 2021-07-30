import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {gql,Apollo} from 'apollo-angular';
import { Garden } from '../models/garden';


const Get_Gardens = gql`query {
  getAllGardens {
    id
    owner
    crops
    location
    profileId
  }
}`;

@Component({
  selector: 'ac-list-garden',
  templateUrl: './list-garden.component.html',
  styleUrls: ['./list-garden.component.scss']
})
export class ListGardenComponent implements OnInit {

  allGardens:Garden[] = [];

  constructor(private router: Router,private apollo:Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: Get_Gardens
    }).valueChanges
    .subscribe(({data,loading}) => {
      console.log(loading); //use a spinner here
      this.allGardens = data.getAllGardens;
    })
    
  }

  editGarden(id:number){

    console.log("id is" + id)
    this.router.navigate(['/gardenedit', id])
  }

  loadOwners() {
    this.router.navigate(['/ownerlist'])
  }

  loadPets() {
    this.router.navigate(['/petlist'])
  }

}
