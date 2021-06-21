import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EnterCodeService {
  constructor(@Inject(DOCUMENT) public document: Document) {}
  contDownTimer() {
    const startTimeOut = 20;
    const timeWhenStart = 0;
    const emitTime = 1000;
    return timer(timeWhenStart, emitTime).pipe(
      map((currentTime) => startTimeOut - currentTime),
      take(startTimeOut + 1),
      tap((time) => {
        if (time == 0) {
          console.log('Nuevo codigo enviado');
        }
      })
    );
  }
  onInputEntry(event: any, id: any) {
    let actualBox = <HTMLInputElement>this.document.getElementById(id);
    let InputIndex = id.split('__')[1];
    let nexInput = +InputIndex + 1;
    let idBox = id.split('__')[0] + '__';
    let newID = idBox + nexInput;
    let nextBox = this.document.getElementById(newID);
    this.focusNextBox(actualBox, nextBox, event);
  }

  private focusNextBox(actualBox: HTMLElement,nextBox: HTMLElement | null, event: any) {
    if (nextBox) {
      if (event.data) {
        if (event.data.length == event.target.attributes.maxlength.value) {
          actualBox.classList.add("full-box")
          nextBox.focus();
        }
      }
    }
  }

  replaceWhenValue(id: any) {
    const input = <HTMLInputElement>this.document.getElementById(id);
    if (input) {
      input.focus();
      input.setSelectionRange(0, 1);
    }
  }
}
