import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
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