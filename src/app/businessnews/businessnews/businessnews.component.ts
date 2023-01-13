import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private service : NewsapiservicesService ){}
 businessNewsDisplay: any = []
 ngOnInit(): void {
    this.service.businessNews().subscribe((result)=>{
      this.businessNewsDisplay = result.articles;
    })
 }

}
