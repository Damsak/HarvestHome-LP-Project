import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {gql,Apollo} from 'apollo-angular';

@Component({
  selector: 'ac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private apollo:Apollo) { }

  ngOnInit(): void {
  }

}
