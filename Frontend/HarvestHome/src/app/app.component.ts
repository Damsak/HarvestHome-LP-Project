import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'HarvestHome';
  fullName:string = ''

  ngOnInit() {
    this.loadProfile().then(user => {
      console.log(user)
      this.fullName = user.firstName + ' ' + user.lastName
    })
  }

  constructor(private auth:KeycloakService) {}

  loadProfile(): Promise<any> {
    return new Promise<any>((resolve,reject)=>{
      //determine user is loggedIn or not
      if(this.auth.isLoggedIn()){
        this.auth.loadUserProfile()
        .then(data=>resolve(data))
        .catch(error=>console.log(error))
      } else {
        console.log('User not logged in')
      }
    })
  }


  logout(){
    this.auth.logout()
  }


  // constructor(public router: Router){}
}
