import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable ,  Observer } from 'rxjs';
@Component({
  selector: 'app-root',
  template: `
    <app-template></app-template>
           `
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Demo';
  numbers$: Observable<number>;

  ngOnInit() {

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      } , 2000);
      setTimeout(() => {
        observer.next('second package');
      } , 4000);
      setTimeout(() => {
        observer.error('this does not work!');
      } , 5000);
    });

    myObservable.subscribe((data: string) => {
      console.log(data);
    });


    /*const numbers$ = interval(1000);
    numbers$.subscribe((int: number) => {
      console.log(int);
    });*/
  }

  ngOnDestroy(): void {
    // this.numbers$
  }





}
