import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private apiUrl = 'http://localhost:49999/api/House';
  constructor(private httpClient: HttpClient) { 

  }

  getHouses() {
    return this.httpClient.get(this.apiUrl);
  }

  getRooms(id) {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }
}
