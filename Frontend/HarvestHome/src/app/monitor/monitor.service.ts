import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable} from 'rxjs';
import { Monitor } from './models/monitor';
import { gql,Apollo } from 'apollo-angular';



const Get_Monitors = gql`query {
    getAllMonitorRecords {
      id
      profileId
      soilMoisture
    }
  }`;

const Get_AverageFactors = gql`query {
  getAllMonitorRecords {
  soilMoisture
  airTemperature
  fertilizerLevels
  }
 }`;






@Injectable({
    providedIn:'root'
})

export class MonitorService {

allSensorRecords:any;
// averageSoilMoisture:number = 0;

constructor(private http:HttpClient,private apollo:Apollo,private router: Router) {}


onGet(): Observable<any> {

  return this.apollo.query<any>({
    query: Get_Monitors
  })
}


onGetAverageFactors(): Observable<any> {
  return this.apollo.query<any>({
    query: Get_AverageFactors
  })

}



// OnGetSoilMoisture(): number {



//   this.onGetAverageFactors().subscribe((data) => {
    
//     this.allSensorRecords = data.data.getAllMonitorRecords;
      

//       for(var i = 0; i < this.allSensorRecords.length; i++) {
//         var obj = this.allSensorRecords[i];

//         this.averageSoilMoisture =  obj.soilMoisture + this.averageSoilMoisture;      
//     }
//     console.log("Av "+  this.averageSoilMoisture);
//     return this.averageSoilMoisture;   
//     }); 
//   }





// onDelete(id:string):Observable<any> {

//   console.log("Mutate received " + id)
//   return this.apollo.mutate({
//     mutation: Delete_Garden,
//     variables: {
//       "id": id
//     }
// })

// }







// onAdd(garden:Garden): Observable<any>{

//   return this.apollo.mutate({
//       mutation: Post_Garden,
//       variables: {
//           "gardenInput": {
//           "owner":garden.owner,
//           "crops":garden.crops,
//           "location":garden.location,
//           "profileId":garden.profileId
//       },
//       }
//   })
// }



// onGetGarden(id:string) : Observable<any> {
//      return this.apollo.query<any>({
//       query: FindOne_Garden,
//       variables: {
//         "id": id
//       },
//     })
//   }



}


