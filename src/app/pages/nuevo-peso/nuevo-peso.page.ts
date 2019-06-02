import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-peso',
  templateUrl: './nuevo-peso.page.html',
  styleUrls: ['./nuevo-peso.page.scss'],
})
export class NuevoPesoPage implements OnInit {
  tiempoCumplido=false;

  constructor() { }

  ngOnInit() {
  }

  cooo(){
    if(this.tiempoCumplido==false){
      this.tiempoCumplido=true;
    }else{
      this.tiempoCumplido=false;
    }
  }

}
