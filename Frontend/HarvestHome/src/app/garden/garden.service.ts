import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { Garden } from './models/garden';
import { gql,Apollo } from 'apollo-angular';



const Post_Garden = gql`
mutation createGarden($gardenInput: GardenCreateDTO!) {
  createGarden(gardenInput: $gardenInput) {
		owner
    crops
    location
    profileId
  }
}
`;


// const FindOne_Garden = gql`
// query ($id: String!){
// findOne(id:$id) {
//   id
//   owner
//   crops    
// }
// }`




@Injectable({
    providedIn:'root'
})

export class GardenService {

    status: any;
    gardenId:any;
    updatedGarden:any;
    errorMessage:any;
   

    rootGardens: any;

    selectedGarden:any;
   

constructor(private http:HttpClient,private apollo:Apollo,private router: Router) {}

// onConfig() {
//     return this.http.get(this.ROOT_URL);
// }

// onGet() {
//     return this.http.get(this.ROOT_URL);
//     //return this.owners;
// }

onAdd(garden:Garden) {

    console.log("Onadd values " + JSON.stringify(garden));

    this.apollo
      .mutate({
        mutation: Post_Garden,
        variables: {
            "gardenInput": {
            "owner":garden.owner,
            "crops":garden.crops,
            "location":garden.location,
            "profileId":garden.profileId
        }
        }
    }).subscribe(({data})=>{})

    this.router.navigate(['/gardenlist']);
}



// onDelete(id:string) {

//     this.http.delete(this.ROOT_URL + `/${id}`)
//     .subscribe(() => this.status = 'Delete successful');

// }

// // onGetOwner(id:string) {

// //     console.log("Recied id is  " + id)

// //     this.http.get(this.ROOT_URL + `/${id}`)
// //     .subscribe({
// //         next: data => {
// //             this.updatedOwner = data;
// //         },
// //     })


// // return this.updatedOwner;

// // // console.log("Updated - Owner "  + JSON.stringify(this.updatedOwner));
// //    // console.log("value onGetOwner" + JSON.stringify(this.http.get(this.ROOT_URL + `/${id}` )) );
// //   //  return this.http.get(this.ROOT_URL + `/${id}` );   
// //     //return this.owners.find(x => x.id === id);
// // }






// onGetNewGarden(id: string):Observable<Garden>{

//   console.log("OnGetNewGraden Receied Id is  " + id);
//   this.apollo.watchQuery<any>({
//       query: FindOne_Garden,
//       variables: {
//         "id": id
//       },
//     }).valueChanges.subscribe({

//       next: data => {
//           this.selectedGarden = data;    
//       },
//       error: error => {
//           this.errorMessage = error.message;
//           console.error('There was an error!', error);
//       },
//   })

//   console.log("selected Gardennn " + JSON.stringify(this.selectedGarden.data));
//   return this.selectedGarden;
// }








// onUpdateOwner(owner:any): Observable<Owner> {

// //because we only update the city. 
//     let updatedCity = {
//         "city":owner.nearestCity
//     }
//     return this.http.put<Owner>(`${this.ROOT_URL}/${owner.id}/city`, updatedCity);
// }

}


