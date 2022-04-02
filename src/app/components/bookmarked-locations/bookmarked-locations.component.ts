import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarked-locations',
  templateUrl: './bookmarked-locations.component.html',
  styleUrls: ['./bookmarked-locations.component.css']
})
export class BookmarkedLocationsComponent implements OnInit {
  @Input() bookmarked : any ;
 
  constructor() { }

  ngOnInit(): void {
 
   
  }

  

  delete=(c:any)=>{
    this.bookmarked= this.bookmarked.filter((e:any)=>e !=c)
   

  }

}
