import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  constructor(private service : NewsapiservicesService){}
topheadingDisplay:any = [];

  ngOnInit(): void {
    this.service.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay = result.articles;
    })
  }

}
