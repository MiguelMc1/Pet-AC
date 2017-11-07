import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { GooglePlus } from 'ionic-native';
import { RegPet } from '../pages/regPet/regPet';
import * as firebase from 'firebase';

import { WelcomePage } from '../pages/welcome/welcome';
import { PetFeed } from '../pages/petFeed/petFeed';
import { Info } from '../pages/info/info';
import { DonationFeed } from '../pages/donationFeed/donationFeed';
import { Alerts } from '../pages/alerts/alerts';
import { PostService0 } from '../../providers/post-service0';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PetFeed;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    /*var config = {
      /apiKey: "AIzaSyCKq0Gz2ltLYc_RKJusJij2c0R2GaxU2y8",
      authDomain: "dm-pet.firebaseapp.com",
      databaseURL: "https://dm-pet.firebaseio.com",
      storageBucket: "dm-pet.appspot.com",
      messagingSenderId: "137998444426"
    };
    firebase.initializeApp(config);
    var user = firebase.auth().currentUser;

        if (user) {
            this.rootPage = RegPet;
        } else {

            this.rootPage = PetFeed;
        }*/
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    { title: 'Mascotas', component: PetFeed },
    { title: 'Donaciones', component: DonationFeed },
    { title: 'Información', component: Info },
    { title: 'Reportes', component: Alerts },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
