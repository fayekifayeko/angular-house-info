import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  private rooms;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private houseService : HouseService
  ){ }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.houseService.getRooms(id).subscribe(result => {
      console.log(result);
      this.rooms = result['rooms'];
    })
  }

  backClicked() {
    this.location.back();
  }

}
