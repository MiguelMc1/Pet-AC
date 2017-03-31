import { Component, Inject } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { MyApp } from '../../app/app.component';



@Component({
  selector: 'page-page7',
  templateUrl: 'page7.html'
})
export class Page7 {
  registro: FirebaseListObservable<any>;
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    angFire: AngularFire, @Inject(FirebaseApp) firebase: any) {
    this.registro = angFire.database.list('/registro');
  }

  addusuario():void{
    let prompt = this.alertCtrl.create({
      title: 'Crear Cuenta',
      message: 'Ingrese la información',
      inputs:[
        {
          name: 'FirstName',
          placeholder: "Nombres"
        },
        {
          name: 'LastName',
          placeholder: "Apellidos"
        },
        {
          name: 'age',
          placeholder: "Edad"
        },
        {
          name: 'email',
          placeholder: "E-mail"
        },
        {
          name: 'phone',
          placeholder: "Telefono Celular"
        },
        {
          name: 'password',
          placeholder: "Contraseña"
        }
      ],
      buttons: [
      {
        text: "Cancelar",
        handler: data => {
          console.log("cancel cliked");
        }
      },
        {
          text: "Registrar",
          handler: data => {
            this.registro.push({
              FirstName: data.FirstName,
              LastName: data.LastName,
              age: data.age,
              email: data.email,
              phone: data.phone,
              password: data.password
            })
          }
        }
      ]
    });
    prompt.present();
  }
  done(Inicio) {
    let alert = this.alertCtrl.create({
      title: 'Bienvenido',

      buttons: [{
        text: "OK",
        handler: data => {
          this.navCtrl.push(MyApp, {
          });
        }
      }]
    });
    alert.present();
  }
}
