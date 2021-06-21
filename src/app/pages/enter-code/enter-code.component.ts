import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EnterCodeService } from 'src/app/services/enter-code.service';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss']
})
export class EnterCodeComponent implements OnInit {
  timer !: Observable<number>;
  constructor(private enterService: EnterCodeService, private router: Router) { }

  ngOnInit(): void {
    this.timer = this.enterService.contDownTimer();
  }

  focus(event: any){
    this.enterService.replaceWhenValue(event);
  }
  change(event:any){
    console.log('EL eventp', event);
    
    this.enterService.onInputEntry(event.event, event.idTag);
  }
  emitSend(event:any){
    if(event){
      this.router.navigate(['home'])
    }
  }
}
