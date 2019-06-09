import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.page.html',
  styleUrls: ['./alimentos.page.scss'],
})
export class AlimentosPage implements OnInit {

  tipoalimento=""
  alimento=""
  urlImagen=""

  constructor(
    private rutaActiva: ActivatedRoute,
    private modalController:ModalController
  ) { }

  ngOnInit() {
    this.tipoalimento=this.rutaActiva.snapshot.paramMap.get('id');
    //console.log("amiento = ",this.tipoalimento)
    let a=+this.tipoalimento
    switch(a){
      case 1: this.alimento="Desayuno"
              this.urlImagen="../../../assets/images/5/desayuno-ingles-01.jpg"
        break;
      case 2:this.alimento="Mediodía"
              this.urlImagen="../../../assets/images/5/mediodia3.jpg"
        break;
      case 3:this.alimento="Comida"
             this.urlImagen="../../../assets/images/5/comida.jpg"
        break;
      case 4:this.alimento="Merienda"
              this.urlImagen="../../../assets/images/5/Merienda1.jpg"
        break;
      case 5:this.alimento="Cena"
              this.urlImagen="../../../assets/images/5/comida3.jpg"
          break;
    }
  }

 

  async iramodal(){
    let ro={
        grasa:12,
        ckal:17,
        carbohidratos:50,
        lipidos:14,
        proteinas:40
      }
    
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal',
      componentProps: { 
        alimento: this.alimento,
        info:ro,
      },
      
    }
    
    );
    return await modal.present();
  }

  

}
