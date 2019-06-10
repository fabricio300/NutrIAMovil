import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-peso',
  templateUrl: './nuevo-peso.page.html',
  styleUrls: ['./nuevo-peso.page.scss'],
})
export class NuevoPesoPage implements OnInit {
  tiempoCumplido=false;
  formpeso:FormGroup
  constructor(
    private forbuild: FormBuilder
  ) { }

  ngOnInit() {
    this.formpeso=this.forbuild.group({
      'newpeso' :['', Validators.required]
    })
  }

  cooo(){
    if(this.tiempoCumplido==false){
      this.tiempoCumplido=true;
    }else{
      this.tiempoCumplido=false;
    }
  }

}
