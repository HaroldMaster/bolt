import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { HomeScreenComponent } from './home-screen.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { RecentVisitedComponent } from 'src/app/components/recent-visited/recent-visited.component';
import { SearchDestinyComponent } from 'src/app/components/search-destiny/search-destiny.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';


@NgModule({
  declarations: [
    HomeScreenComponent,
    MapComponent,
    RecentVisitedComponent,
    SearchDestinyComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HomeScreenRoutingModule
  ]
})
export class HomeScreenModule { }
