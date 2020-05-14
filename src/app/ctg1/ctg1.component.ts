import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ctg1',
  templateUrl: './ctg1.component.html',
  styleUrls: ['./ctg1.component.scss']
})
export class Ctg1Component implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp = this.http.get("http://kodytek.cz:8080/rest-api/api/");
  }

}
