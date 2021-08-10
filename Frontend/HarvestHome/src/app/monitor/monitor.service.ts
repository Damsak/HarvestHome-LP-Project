import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable} from 'rxjs';
import { Monitor } from './models/monitor';
import { gql,Apollo } from 'apollo-angular';
import { Maintain } from './models/maintain';



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

const Get_Maintain = gql`query {
  getAllMaintainRecords {
    id
  	plan
  	removeWeeds
  	activity
  	waterlevel
  	requiredTimeInMins
  }
}`;

const Post_Maintain = gql`mutation 
createMaintainRecord( $maintainInput: MaintainCreateDTO!) {
  createMaintainRecord( maintainInput: $maintainInput) {
  plan
  removeWeeds
  activity
  waterlevel
  requiredTimeInMins
  }
}`;

const FindOne_Maintain = gql`
query ($id: String!){
  MaintainRecord (id:$id) {
    id
		plan
    removeWeeds
    activity
    waterlevel
    requiredTimeInMins
  }
}`;

const Put_Maintain = gql`
mutation updateMaintain($maintainUpdateInput: MaintainUpdateDTO!, $id: String!) {
  updateMaintain(maintainUpdateInput: $maintainUpdateInput, id: $id) {
  plan
  removeWeeds
  activity
  waterlevel
  requiredTimeInMins
  }
}
`;

const Delete_Maintain = gql`
mutation deleteMaintain($id: String!) {
  deleteMaintain(id: $id) {
  plan
  removeWeeds
  requiredTimeInMins
  waterlevel
  }
}
`;


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

onGetMaintain(): Observable<any> {
  return this.apollo.query<any>({
    query: Get_Maintain
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





onAdd(maintain:Maintain): Observable<any>{
  return this.apollo.mutate({
      mutation: Post_Maintain,
      variables: {
        "maintainInput": {
        "plan": maintain.plan,
        "removeWeeds": maintain.removeWeeds,
        "activity": maintain.activity,
        "waterlevel": maintain.waterlevel,
        "requiredTimeInMins": maintain.requiredTimeInMins
              }
        }
  })
}

onUpdateMaintain(maintain:Maintain): Observable<any> {
  return this.apollo.mutate({
    mutation: Put_Maintain,
    variables:  {  
      "id": maintain.id,
      "maintainUpdateInput": {
        "plan": maintain.plan,
        "removeWeeds":maintain.removeWeeds,
        "activity": maintain.activity,
        "waterlevel": maintain.waterlevel,
        "requiredTimeInMins": maintain.requiredTimeInMins
            }
        }
    } )
 }

 onDelete(id:string):Observable<any> {

  return this.apollo.mutate({
    mutation: Delete_Maintain,
    variables: {
      "id": id
    }
})

  // .subscribe(() => this.status = 'Delete successful');

}


onGetMaintainPlan(id:string) : Observable<any> {
     return this.apollo.query<any>({
      query: FindOne_Maintain,
      variables: {
        "id": id
      },
    })
  }





}


