import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { GardenService } from '../garden.service';
import { Garden } from '../models/garden';
import { gql,Apollo } from 'apollo-angular';



const FindOne_Garden = gql`
query ($id: String!){
garden (id:$id) {
  id
  owner
  crops
  location
  profileId    
}
}`

@Component({
  selector: 'ac-edit-garden',
  templateUrl: './edit-garden.component.html',
  styleUrls: ['./edit-garden.component.scss']
})
export class EditGardenComponent implements OnInit {


  id:any;
  owner:any;
  crops:any;
  location:any;
  profileId:any;
  selectedGarden:any;
  paramId: any;
  private sub: any;
  finalGarden: any;

  gardenToBeUpdated:any;



  constructor(private router: Router,private route: ActivatedRoute, private gardenService: GardenService,private apollo:Apollo) {
   }

  ngOnInit(): void{

      this.sub = this.route.params.subscribe(params => {
      this.paramId = params['id'];

    });

    if (this.paramId) {

      // this.gardenToBeUpdated = this.gardenService.onGetGarden(this.paramId) {

      // }


    //   this.apollo.watchQuery<any>({
    //     query: FindOne_Garden,
    //     variables: {
    //       "id": this.paramId
    //     },
    //   }).valueChanges.subscribe({
    //     next: data => {
    //         this.selectedGarden = data;
    //         this.id = this.selectedGarden.data.garden.id;
    //         this.owner =this.selectedGarden.data.garden.owner;
    //         this.crops = this.selectedGarden.data.garden.crops;
    //         this.location = this.selectedGarden.data.garden.location;
    //         this.profileId = this.selectedGarden.data.garden.profileId;
            
    //     },
    //     error: error => { 
    //         console.error('There was an error!');
    //     },
    // })

    this.gardenService.onGetGarden(this.paramId).subscribe((data) => {
          
            this.id = data.data.garden.id;
            this.owner = data.data.garden.owner;
            this.crops = data.data.garden.crops;
            this.location = data.data.garden.location;
            this.profileId = data.data.garden.profileId;

          },
          err => console.log(err)
        )

    }
  }

  // updateGarden(values:Garden){

  //   this.gardenService.onUpdateGarden(values).subscribe(
  //     res => {
  //       console.log( "Update Garden Received  " + res);
  //       this.router.navigateByUrl('/gardenlist')
  //     },
  //     err => console.log(err)
  //   )
  // }

  updateGarden(values:Garden){

    this.gardenService.onUpdateGarden(values).subscribe((data) => {
      this.router.navigate(['/gardenlist'])
    });

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  navigatetoGardenList() {
    this.router.navigate(['/gardenlist'])
  }

}
