import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { PopoverPage } from '../pages/popover/popover';
//import { PopoverPage } from '../pages/welcome/pages';
import { BasicPage } from '../pages/welcome/pages';
import { Info } from '../pages/info/info';
import { Alerts } from '../pages/alerts/alerts';
import { PetFeed } from '../pages/petFeed/petFeed';
import { DonationFeed } from '../pages/donationFeed/donationFeed';
import { PetDetail } from '../pages/petDetail/petDetail';
import { DonationDetail } from '../pages/donationDetail/donationDetail';
import { GetPet } from '../pages/getPet/getPet';
import { GetDonation } from '../pages/getDonation/getDonation';
import { RegDonation } from '../pages/regDonation/regDonation';
import { RegPet } from '../pages/regPet/regPet';
import { LoginPage } from '../pages/login/login';
import { GetServiceProvider } from '../providers/get-service';

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
    PopoverPage,
    BasicPage,
    PetFeed,
    Info,
    DonationFeed,
    Alerts,
    PetDetail,
    DonationDetail,
    GetDonation,
    RegDonation,
    GetPet,
    LoginPage,
    RegPet
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
    //AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    BasicPage,
    PetFeed,
    Info,
    DonationFeed,
    Alerts,
    PetDetail,
    DonationDetail,
    GetDonation,
    RegDonation,
    GetPet,
    LoginPage,
    RegPet
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    GetServiceProvider]
})
export class AppModule {}
