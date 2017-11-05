
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetDonation } from '../getDonation/getDonation';

/*
  Generated class for the PetDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-donationDetail',
  templateUrl: 'donationDetail.html'
})
export class DonationDetail {
  donacion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.donacion = navParams.get('donacion');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationDetail');
  }

  getDonation(donacion){
    this.navCtrl.push(GetDonation, {
      donacion: donacion
    });
  }

}
