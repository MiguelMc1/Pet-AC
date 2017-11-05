import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

/*
  Generated class for the Adopt page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-getPet',
  templateUrl: 'getPet.html'
})
export class GetPet {
  pet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController) {
    this.pet = navParams.get('pet');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetPet');
  }

  done(pet) {
    let alert = this.alertCtrl.create({
      title: 'Registro Completado',
      subTitle: 'Muchas gracias por considerar la adopción.',
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
