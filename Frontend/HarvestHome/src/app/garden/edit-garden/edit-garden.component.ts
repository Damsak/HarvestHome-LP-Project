import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { GardenService } from '../garden.service';
import { Garden } from '../models/garden';
import { gql,Apollo } from 'apollo-angular';
import { JsonpClientBackend } from '@angular/common/http';


const FindOne_Garden = gql`
query ($id: String!){
findOne(id:$id) {
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

  updatedOwner:any;


  constructor(private router: Router,private route: ActivatedRoute, private gardenService: GardenService,private apollo:Apollo) {
   }

  ngOnInit(): void{

      this.sub = this.route.params.subscribe(params => {
      this.paramId = params['id'];

    });

    if (this.paramId) {

      this.apollo.watchQuery<any>({
        query: FindOne_Garden,
        variables: {
          "id": this.paramId
        },
      }).valueChanges.subscribe({
        next: data => {
            this.selectedGarden = data;
            this.id = this.selectedGarden.data.findOne.id;
            this.owner =this.selectedGarden.data.findOne.owner;
            this.crops = this.selectedGarden.data.findOne.crops;
            this.location = this.selectedGarden.data.findOne.location;
            this.profileId = this.selectedGarden.data.findOne.profileId;
            
        },
        error: error => { 
            console.error('There was an error!');
        },
    })

      // this.gardenService.onGetNewGarden(this.paramId).subscribe(
      //     res => {
      //       console.log("In editGarden " + JSON.stringify(res));
      //       this.finalGarden = res;
      //       this.id = this.finalGarden._id;
      //       this.owner =this.finalGarden.owner;
      //       this.crops = this.finalGarden.crops;
      //       this.location = this.finalGarden.location;
      //       this.profileId = this.finalGarden.profileId;

      //     },
      //     err => console.log(err)
      //   )

    }
  }

  updateGarden(values:Garden){

    // this.gardenService.onUpdateOwner(values).subscribe(
    //   res => {
    //     console.log(res);
    //     this.router.navigateByUrl('/ownerlist')
    //   },
    //   err => console.log(err)
    // )
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  navigatetoGardenList() {
    this.router.navigate(['/gardenlist'])
  }

}
