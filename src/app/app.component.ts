import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { UploadPage } from '../pages/upload/upload';
import * as firebase from 'firebase';

import { Page1 } from '../pages/page1/page1';
import { Page3 } from '../pages/page3/page3';
import { Page5 } from '../pages/page5/page5';
import { Page6 } from '../pages/page6/page6';
import { PostService0 } from '../../providers/post-service0';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

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
            this.rootPage = UploadPage;
        } else {

            this.rootPage = Page1;
        }*/
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    { title: 'Inicio', component: Page1 },
    { title: 'Donaciones', component: Page5 },
    { title: 'Información', component: Page3 },
    { title: 'Reportes', component: Page6 },
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
