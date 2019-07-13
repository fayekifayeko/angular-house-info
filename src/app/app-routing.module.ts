import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesListComponent } from './components/houses-list/houses-list.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';


const routes: Routes = [
  { path: 'houses', component: HousesListComponent },
  { path: 'houses/:id', component: RoomsListComponent },
  { path: '', redirectTo: '/houses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
