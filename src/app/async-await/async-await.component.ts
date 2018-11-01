import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // https://www.youtube.com/watch?v=vn3tm0quoqE&list=LLnPngcC_E4_CrtC6XQt2aqg&index=8&t=0s

    console.log('🥶 Synchronous 1');

    setTimeout(_ => console.log('😡 Timeout 2'), 2);

    Promise.resolve().then(_ => console.log('🤠 Promise 3'));

    console.log('🥶 Synchronous 4');
  }

}
