import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-garden',
  templateUrl: './home-garden.component.html',
  styleUrls: ['./home-garden.component.scss']
})
export class HomeGardenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
