import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leftBarDatas: any;
  contactDatas: any;
  constructor(
    private HS: HomeService
  ) { }

  ngOnInit(): void {
    this.leftBarDatas = this.HS.leftBarDatas;
    this.contactDatas = this.HS.contactDatas;
  }

}
