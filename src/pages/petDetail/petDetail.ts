import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetPet } from '../getPet/getPet';

/*
  Generated class for the PetDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-petDetail',
  templateUrl: 'petDetail.html'
})
export class PetDetail {
  pet: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = navParams.get('pet');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PetDetail');
  }

  getPet(pet){
    this.navCtrl.push(GetPet, {
      pet: pet
    });
  }

}
