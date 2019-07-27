import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiservicesService } from 'src/app/apiservices.service';

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
    public alertController: AlertController,
    private api:ApiservicesService
  ) { 
    this.lisformgoup=this.forbulid.group({
      'correo':['',Validators.required],
      'password':['',Validators.required]
    })
  }

  ngOnInit() {
    
  }

  async no(){
 
    
      console.log("ree")
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Usuario no encontrado',
        message: 'Su usuario o contraseña son incorrectos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    
  }

  validar(){
    var v=0;
 
    this.api.getPasientes().subscribe(
      Response=>{   
        console.log("infos: ",Response)
        Response.forEach(element => {
          console.log(element.email)
          console.log(element.password)
          if(this.lisformgoup.get('correo').value==element.email && v<2){
            console.log("entra a =1 ")
            v=v+1
          }

          if(this.lisformgoup.get('password').value==element.password && v<2){
            console.log("entra a =2 ")
            v=v+1
          }

          if(v<2){
            v=0
          }

        });
        console.log("vmmmm=",v)
        if(v==2){
          this.rout.navigate(['/menu/cont1'])
        }else{
          this.no()
        }
      },error=>{
        console.log(error)
      }
    )

    
 
    
   
  }



}
