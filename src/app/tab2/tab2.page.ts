import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  characters = [];

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.http.get<any>("https://jsonplaceholder.typicode.com/users")
      .subscribe((res) => {
        console.log(res)
        this.characters = res;
      });
  }

}