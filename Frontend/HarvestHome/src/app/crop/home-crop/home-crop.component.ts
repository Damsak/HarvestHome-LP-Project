import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crop-garden',
  templateUrl: './home-crop.component.html',
  styleUrls: ['./home-crop.component.scss']
})
export class HomeCropComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(['/homegarden'])
  }

  navigatetoCropCreate() {
    this.router.navigate(['/cropcreate'])
  }

  navigatetoCropList() {
    this.router.navigate(['/croplist'])
  }


}
