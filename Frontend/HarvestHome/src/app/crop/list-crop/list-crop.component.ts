import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {gql,Apollo} from 'apollo-angular';
import { Crop } from '../models/crop';
import { CropService } from '../crop.service';


@Component({
  selector: 'ac-list-crop',
  templateUrl: './list-crop.component.html',
  styleUrls: ['./list-crop.component.scss']
})
export class ListCropComponent implements OnInit {

  allCrops:Crop[] = [];
  Crop:any;

  constructor(private router: Router,private apollo:Apollo, private cropService:CropService) { }

  ngOnInit(): void {

      this.cropService.onGet().subscribe((data) => {
      this.allCrops = data.data.getAllCrops;
    });
  }

  editCrop(id:number){
    this.router.navigate(['/cropedit', id])
  }

  onDelete(id:number){

    this.cropService.onDelete(id.toString()).subscribe((data) => {      
    this.Crop = data;
    console.log(JSON.stringify(this.Crop))

    },
    err => console.log(err)
  );
    //reload page after delete
    window.location.reload();
  }

}
