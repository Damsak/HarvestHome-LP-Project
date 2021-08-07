import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable} from 'rxjs';
import { Crop } from './models/crop';
import { gql,Apollo } from 'apollo-angular';


const Get_Crops = gql`query {
  getAllCrops {
    id
    crop
    GardenId
    soilMoisture
    airTemperature
    fertilizerLevels
  }
}`;

const Post_Crop = gql`
mutation createCrop( $cropInput: CropCreateDTO!) {
  createCrop( cropInput: $cropInput) {
  crop
  GardenId
  soilMoisture
  airTemperature
  fertilizerLevels
  }
}
`;

const Put_Crop = gql`
mutation updateCrop($cropUpdateInput: CropUpdateDTO!, $id: String!) {
  updateCrop(cropUpdateInput: $cropUpdateInput, id: $id) {
  crop,
  GardenId,
  soilMoisture,
  airTemperature,
  fertilizerLevels,
  }
}
`;


const Delete_Crop = gql`
mutation deleteCrop($id: String!) {
  deleteCrop(id: $id) {
  id
  crop
  GardenId
  soilMoisture
  airTemperature
  fertilizerLevels
  }
}
`;

const FindOne_Crop = gql`
query ($id: String!){
  crop (id:$id) {
  id
  crop
  GardenId
  soilMoisture
  airTemperature
  fertilizerLevels
  }
}
`;



@Injectable({
    providedIn:'root'
})

export class CropService {

    status: any;
    cropId:any;
    updatedCrop:any;
    errorMessage:any;
    rootCrops: any;
    selectedCrop:any;

    id:any;
    owner:any;
    crops:any;
    location:any;
    profileId:any;
   

constructor(private http:HttpClient,private apollo:Apollo,private router: Router) {}


onGet(): Observable<any> {

  return this.apollo.query<any>({
    query: Get_Crops
  })
}


onDelete(id:string):Observable<any> {

  return this.apollo.mutate({
    mutation: Delete_Crop,
    variables: {
      "id": id
    }
})

  // .subscribe(() => this.status = 'Delete successful');

}




onAdd(crop:Crop): Observable<any>{

  console.log("ONADD " + JSON.stringify(crop))

  return this.apollo.mutate({
      mutation: Post_Crop,
      variables: {    
          "cropInput": {
                "crop": crop.crop,
                "GardenId":crop.GardenId,
                "soilMoisture": crop.soilMoisture,
                "airTemperature": crop.airTemperature,
                "fertilizerLevels": crop.fertilizerLevels
                }
                }
  })
}


onGetGarden(id:string) : Observable<any> {
     return this.apollo.query<any>({
      query: FindOne_Crop,
      variables: {
        "id": id
      },
    })
  }




  onUpdateCrop(crop:Crop): Observable<any> {

  console.log("Crop update service " + JSON.stringify(crop))
 window.location.reload();
  return this.apollo.mutate({
      mutation: Put_Crop,
      variables:  {  
        "id": crop.id,
        "cropUpdateInput": {
          "crop": crop.crop,
          "GardenId": crop.GardenId,
          "soilMoisture": crop.soilMoisture,
          "airTemperature": crop.airTemperature,
          "fertilizerLevels": crop.fertilizerLevels
              }
          }
  })
}

}


