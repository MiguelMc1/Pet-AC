import { Component, Inject } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { DonationDetail } from '../donationDetail/donationDetail';
import { RegDonation } from '../regDonation/regDonation';
import { GetDonation } from '../getDonation/getDonation';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';

@Component({
  selector: 'page-donationFeed',
  templateUrl: 'donationFeed.html'
})
export class DonationFeed {

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
    this.navCtrl.push(DonationDetail, {
      donacion: donacion
    });
  }

  Donacioness(donacion){
    this.navCtrl.push(RegDonation, {
      donacion: donacion
    });
  }

  Donaciones(){
    this.navCtrl.push(RegDonation);
  }

}
