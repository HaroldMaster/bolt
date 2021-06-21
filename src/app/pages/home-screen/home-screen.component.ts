import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapService } from 'src/app/services/map.service';
import { RecentVisitedService } from 'src/app/services/recent-visited.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  map :any;
  recentPlaces !: Array<{[key: string]:string}>;
  constructor(private mapService: MapService, private recentVisitedService: RecentVisitedService) {}

  ngOnInit(): void {
    this.map = this.mapService.buildMap();
    this.recentPlaces = this.recentVisitedService.getRecent();
  }
}
