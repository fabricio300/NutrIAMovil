import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  lisformgoup:FormGroup

  constructor(
    private forbulid:FormBuilder,
    private rout:Router,
    public alertController: AlertController
  ) { 
    this.lisformgoup=this.forbulid.group({
      'correo':['',Validators.required],
      'password':['',Validators.required]
    })
  }

  ngOnInit() {
    
  }

  async ir(){
    
    if(this.lisformgoup.get('correo').value!="fa"){
      console.log("ree")
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Usuario no encontrado',
        message: 'Su usuario o contraseña son incorrectos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }else{
      this.rout.navigate(['/menu/cont1'])
    }

    
    //routerLink="/menu/cont1"
  }


}
