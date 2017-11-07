import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/*
  Generated class for the WelcomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  userProfile: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
