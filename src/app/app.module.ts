import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page3 } from '../pages/page3/page3';
import { Page5 } from '../pages/page5/page5';
import { Page6 } from '../pages/page6/page6';
import { AngularFireModule } from 'angularfire2';
import { DetailPage } from '../pages/detail/detail';
import { Detail1Page } from '../pages/detail1/detail1';
import { AdoptPage } from '../pages/adopt/adopt';
import { AceptarPage } from '../pages/aceptar/aceptar';
import { DonacionesPage } from '../pages/donaciones/donaciones';
import { LoginPage } from '../pages/login/login';
import { UploadPage } from '../pages/upload/upload';
import { PostService0 } from '../../providers/post-service0';

var firebaseConfig = {
  apiKey: "AIzaSyCKq0Gz2ltLYc_RKJusJij2c0R2GaxU2y8",
  authDomain: "dm-pet.firebaseapp.com",
  databaseURL: "https://dm-pet.firebaseio.com",
  storageBucket: "dm-pet.appspot.com",
  messagingSenderId: "137998444426"
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page3,
    Page5,
    Page6,
    DetailPage,
    Detail1Page,
    AceptarPage,
    DonacionesPage,
    AdoptPage,
    LoginPage,
    UploadPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page3,
    Page5,
    Page6,
    DetailPage,
    Detail1Page,
    AceptarPage,
    DonacionesPage,
    AdoptPage,
    LoginPage,
    UploadPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
