import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdoptPage } from '../adopt/adopt';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  pet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = navParams.get('pet');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  adopt(pet){
    this.navCtrl.push(AdoptPage, {
      pet: pet
    });
  }

}
