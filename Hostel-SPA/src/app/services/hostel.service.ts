import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HostelService {

  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }
  get() {
    return this.http.get(this.baseUrl + "hostels");
  }

  getById(id: number) {
    return this.http.get(this.baseUrl + "hostels/" + id);
  }
}
