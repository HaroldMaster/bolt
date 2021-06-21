import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {
  @Input()
  codeTimeOut !: Observable<number>;
  @Output() boxChange: EventEmitter<any> = new EventEmitter();
  @Output() boxFocus: EventEmitter<any> = new EventEmitter();
  @Output() emitSend: EventEmitter<any> = new EventEmitter();

   form : FormGroup = this.fb.group({
    box1: [null, [Validators.required]],
    box2: [null, [Validators.required]],
    box3: [null, [Validators.required]],
    box4: [null, [Validators.required]],
  });
  constructor(private fb: FormBuilder) { 

  }
  ngOnInit(): void {
  }
  emitFocusBox(idTag:string): void {
    this.boxFocus.emit(idTag);
  }
  emitChangeBox(event : any, idTag:string): void {
    this.boxChange.emit({event, idTag});
  }
  sendCode(){
    this.emitSend.emit(true)
  }
}
