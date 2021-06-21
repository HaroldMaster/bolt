import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-visited',
  templateUrl: './recent-visited.component.html',
  styleUrls: ['./recent-visited.component.scss']
})
export class RecentVisitedComponent implements OnInit {
  @Input()
  recentPlaces !: Array<{[key: string]:string}>
  
  constructor() { }

  ngOnInit(): void {
  }

}
