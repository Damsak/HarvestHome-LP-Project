import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable} from 'rxjs';
import { Garden } from './models/garden';
import { gql,Apollo } from 'apollo-angular';



const Get_Gardens = gql`query {
  getAllGardens {
    id
    owner
    crops
    location
    profileId
  }
}`;

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

const Put_Garden = gql`
mutation updateGarden($gardenUpdateInput: GardenUpdateDTO!, $id: String!) {
  updateGarden(gardenUpdateInput: $gardenUpdateInput, id: $id) {
		owner
    crops
    location
    profileId
  }
}
`;

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
    updatedGardenn:any;

    id:any;
    owner:any;
    crops:any;
    location:any;
    profileId:any;
   

constructor(private http:HttpClient,private apollo:Apollo,private router: Router) {}


onGet(): Observable<any> {

  return this.apollo.query<any>({
    query: Get_Gardens
  })


  // .valueChanges
  // .subscribe(({data,loading}) => {
  //   console.log(loading); //use a spinner here
  //   this.allGardens = data.getAllGardens;
  // })

}


// onConfig() {
//     return this.http.get(this.ROOT_URL);
// }

// onGet() {
//     return this.http.get(this.ROOT_URL);
//     //return this.owners;
// }



// onAdd(garden:Garden) {

//     console.log("Onadd values " + JSON.stringify(garden));

//     this.apollo
//       .mutate({
//         mutation: Post_Garden,
//         variables: {
//             "gardenInput": {
//             "owner":garden.owner,
//             "crops":garden.crops,
//             "location":garden.location,
//             "profileId":garden.profileId
//         }
//         }
//     }).subscribe(({data})=>{})

//     this.router.navigate(['/gardenlist']);
// }






onAdd(garden:Garden): Observable<any>{

  return this.apollo.mutate({
      mutation: Post_Garden,
      variables: {
          "gardenInput": {
          "owner":garden.owner,
          "crops":garden.crops,
          "location":garden.location,
          "profileId":garden.profileId
      },
      }
  })
}






// onDelete(id:string) {

//     this.http.delete(this.ROOT_URL + `/${id}`)
//     .subscribe(() => this.status = 'Delete successful');

// }

onGetGarden(id:string) : Observable<any> {
     return this.apollo.query<any>({
      query: FindOne_Garden,
      variables: {
        "id": id
      },
    })
  }



//     .valueChanges.subscribe({
//       next: data => {
//           this.selectedGarden = data;
//           this.id = this.selectedGarden.data.garden.id;
//           this.owner =this.selectedGarden.data.garden.owner;
//           this.crops = this.selectedGarden.data.garden.crops;
//           this.location = this.selectedGarden.data.garden.location;
//           this.profileId = this.selectedGarden.data.garden.profileId;
          
//       },
//       error: error => { 
//           console.error('There was an error!');
//       },
//   })


// return this.selectedGarden;

// }







// onUpdateGarden(garden:any): Observable<Garden> {

//   console.log("OnUpdate values " + JSON.stringify(garden));

//   this.apollo
//     .mutate({
//       mutation: Put_Garden,
//       variables: {  
//         "id": garden.id,
//         "gardenUpdateInput": {
//               "owner":garden.owner,
//               "crops":garden.crops,
//               "location":garden.location,
//               "profileId":garden.profileId
//               } 
//           }
//   }).subscribe(({data})=>{

//     this.updatedGardenn = data;
//   })

//   console.log("this.up "+ JSON.stringify(this.updatedGardenn))
//   return this.updatedGardenn;

//  // this.router.navigate(['/gardenlist']);
// }


onUpdateGarden(garden:Garden): Observable<any> {
  window.location.reload();
  return this.apollo.mutate({
      mutation: Put_Garden,
      variables: {  
        "id": garden.id,
        "gardenUpdateInput": {
              "owner":garden.owner,
              "crops":garden.crops,
              "location":garden.location,
              "profileId":garden.profileId
              } 
          }
  })
}

}


