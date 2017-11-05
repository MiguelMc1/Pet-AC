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
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class Alerts {
  reporte: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public alertCtrl: AlertController) {
    this.reporte = navParams.get('reporte');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alerts');
  }

  done(reporte) {
    let alert = this.alertCtrl.create({
      title: 'Reporte Completado',
      subTitle: 'Muchas gracias por reportar lo sucedido, en breve lo arreglaremos.',
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
