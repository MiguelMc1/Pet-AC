import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PopoverPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {

  species: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  updatePets(species: string) {
    console.log('ionViewDidLoad PopoverPagePage');
  }

}
