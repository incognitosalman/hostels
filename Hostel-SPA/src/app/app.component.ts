import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Hostel-SPA';
  hostels: any = [];
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log('I am here');

    this.http.get(this.baseUrl + "Hostels")
      .subscribe(response => {
        this.hostels = response;
      }, error => {
        console.error(error);
      });
  }

}
