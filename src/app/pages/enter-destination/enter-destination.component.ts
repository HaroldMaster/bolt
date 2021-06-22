import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-destination',
  templateUrl: './enter-destination.component.html',
  styleUrls: ['./enter-destination.component.scss']
})
export class EnterDestinationComponent implements OnInit {

  newComponent : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  newSearchBox(){
    this.newComponent = true;
  }

}
