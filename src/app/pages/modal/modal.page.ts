import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  alimento=""
  info:any

  constructor(
    private navi:NavController,
    private navpara: NavParams,

  ) { }

  ngOnInit() {
    this.alimento=this.navpara.get('alimento');
    //console.log("modal ----------- alimento",this.alimento)
    this.info=this.navpara.get('info');
    //console.log("modal ----------- info",this.info)
  }

}
