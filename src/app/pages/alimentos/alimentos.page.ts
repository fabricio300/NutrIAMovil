import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.page.html',
  styleUrls: ['./alimentos.page.scss'],
})
export class AlimentosPage implements OnInit {
  varia = false;

  constructor() { }

  ngOnInit() {
  }

  mostrarInfo(){
    if(this.varia==true){
      this.varia=false;
    }else{
      this.varia=true;
    }
  }

  

}
