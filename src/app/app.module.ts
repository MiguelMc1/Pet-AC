import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { AngularFireModule } from 'angularfire2';
import { DetailPage } from '../pages/detail/detail';
import { AdoptPage } from '../pages/adopt/adopt';
import { LoginPage } from '../pages/login/login';
import { UploadPage } from '../pages/upload/upload';

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
    Page2,
    DetailPage,
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
    Page2,
    DetailPage,
    AdoptPage,
    LoginPage,
    UploadPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
