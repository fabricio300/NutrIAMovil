import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont1',
  templateUrl: './cont1.page.html',
  styleUrls: ['./cont1.page.scss'],
})
export class Cont1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    document.addEventListener("backbutton",function(e) {
      console.log("disable back button")
    }, false);
}
}
