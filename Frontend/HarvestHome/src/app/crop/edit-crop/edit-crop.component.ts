import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
import { CropService } from '../crop.service';
import { Crop } from '../models/crop';
import { gql,Apollo } from 'apollo-angular';



// const FindOne_Garden = gql`
// query ($id: String!){
// garden (id:$id) {
//   id
//   owner
//   crops
//   location
//   profileId    
// }
// }`

@Component({
  selector: 'ac-edit-crop',
  templateUrl: './edit-crop.component.html',
  styleUrls: ['./edit-crop.component.scss']
})
export class EditCropComponent implements OnInit {


  id:any;
  crop:any;
  GardenId:any;
  soilMoisture:any;
  airTemperature:any;
  fertilizerLevels:any;
  amount:any;
  unitPrice:any;


  paramId: any;
  private sub: any;
  finalCrop: any;

  cropToBeUpdated:any;

  formstatus:boolean = false;



  constructor(private router: Router,private route: ActivatedRoute, private cropService: CropService,private apollo:Apollo) {
   }

  ngOnInit(): void{

      this.sub = this.route.params.subscribe(params => {
      this.paramId = params['id'];

    });

    if (this.paramId) {

    this.cropService.onGetGarden(this.paramId).subscribe((data) => {       
            this.id = data.data.crop.id;
            this.crop = data.data.crop.crop;
            this.GardenId = data.data.crop.GardenId;
            this.soilMoisture = data.data.crop.soilMoisture;
            this.airTemperature = data.data.crop.airTemperature;
            this.fertilizerLevels = data.data.crop.fertilizerLevels;
            this.amount = data.data.crop.amount;
            this.unitPrice = data.data.crop.unitPrice
          },
          err => console.log(err)
        )
    }
  }

  updateCrop(values:any){

    if((values.crop == '') || (values.GardenId == '') ||( values.soilMoisture == '') || (values.airTemperature == '' )|| (values.fertilizerLevels == '' )|| (values.amount == '' )|| (values.unitPrice == '' )) {
      this.formstatus = true; 
    } else {

    this.cropService.onUpdateCrop(values).subscribe((data) => {
      this.router.navigate(['/croplist']).then(() => {
        window.location.reload();
      });
    });
  }
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  navigatetoCropList() {
    this.router.navigate(['/croplist'])
  }

}
