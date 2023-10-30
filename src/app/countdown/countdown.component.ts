import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer, Observable, Subject } from 'rxjs';
import { take, map, tap, switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'va529-countdown',
  templateUrl: 'countdown.component.html'
})
export class CountdownComponent implements OnInit {
  @Input()
  time!: number;
  
  @Input()
  reset$!: Subject<boolean>;
  
  @Output() ding: EventEmitter<string> = new EventEmitter<string>();

  display$!: Observable<number>;
  constructor() { }

  ngOnInit() {
    this.display$ = this.reset$.pipe(
      startWith(this.time),
      switchMap(() => timer(0, 1000).pipe(

        take(this.time / 1000),
        map(t => this.time / 1000 - 1 - t),
        tap(t => {
          if (t === 0) {
            this.ding.emit(`time!`);
          }
        })
      )));
  }
}
