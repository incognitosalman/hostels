import { Component, OnInit } from '@angular/core';
import { HostelService } from './services/hostel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Hostel-SPA';
  hostels: any = [];

  constructor(private hostelService: HostelService) { }
  ngOnInit(): void {
    this.hostelService.get()
      .subscribe(response => {
        this.hostels = response;
      }, error => {
        console.error(error);
      });

    this.hostelService.getById(1)
      .subscribe(response => {
        console.log(response)
      }, error => {
        console.error(error);
      });
  }

}
