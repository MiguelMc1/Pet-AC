
import { Component, Inject } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { Detail1Page } from '../detail1/detail1';
import { DonacionesPage } from '../donaciones/donaciones';
import { AceptarPage } from '../aceptar/aceptar';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5 {

  donaciones: FirebaseListObservable<any>;
  pages: Array<{title: string, component: any}>;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    angFire: AngularFire, @Inject(FirebaseApp) firebase: any) {
    this.donaciones = angFire.database.list('/donaciones');
  }

  done(){}

  addDonacion():void{
    let prompt = this.alertCtrl.create({
      title: 'Registro de Donaciones',
      message: 'Ingrese la información',
      inputs:[
        {
          name: 'articulo',
          placeholder: "Nombre del articulo"
        },
        {
          name: 'animal',
          placeholder: "¿Para que animal es?"
        },
        {
          name: 'tam',
          placeholder: "Tamaño"
        },
        {
          name: 'info',
          placeholder: "Descripción"
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
          text: "Guardar",
          handler: data => {
            this.donaciones.push({
              articulo: data.articulo,
              animal: data.animal,
              tam: data.tam,
              info: data.info
            })
          }
        }
      ]
    });
    prompt.present();
  }

  changePage(donacion){
    this.navCtrl.push(Detail1Page, {
      donacion: donacion
    });
  }

  Donacioness(donacion){
    this.navCtrl.push(DonacionesPage, {
      donacion: donacion
    });
  }

  Donaciones(){
    this.navCtrl.push(DonacionesPage);
  }

}
