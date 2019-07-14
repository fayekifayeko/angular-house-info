import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {
  private houses;

  constructor(private houseService : HouseService, private router: Router) { }

  ngOnInit() {
    this.houseService.getHouses().subscribe(result => {
      this.houses = result;
    });
  }

  showInfo(house) {
    const id = house.houseID;
    this.router.navigate([`/houses/${id}`]);
  }
}
