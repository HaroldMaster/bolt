import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-destiny',
  templateUrl: './search-destiny.component.html',
  styleUrls: ['./search-destiny.component.scss']
})
export class SearchDestinyComponent implements OnInit {

  @Output()
  openSearchDestiny : EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
   
  goToSearch(){
    this.openSearchDestiny.emit();
  }

}
