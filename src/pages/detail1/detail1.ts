
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AceptarPage } from '../aceptar/aceptar';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail1',
  templateUrl: 'detail1.html'
})
export class Detail1Page {
  donacion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.donacion = navParams.get('donacion');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail1Page');
  }

  aceptar(donacion){
    this.navCtrl.push(AceptarPage, {
      donacion: donacion
    });
  }

}
