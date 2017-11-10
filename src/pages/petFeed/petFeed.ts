import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewController, NavController, AlertController, NavParams, PopoverController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { PetDetail } from '../petDetail/petDetail';
import { RegPet } from '../regPet/regPet';
import { PopoverPage } from '../popover/popover'
import { LoginPage } from '../login/login';
import { GetServiceProvider } from '../../providers/get-service';
import * as firebase from 'firebase';

@Component({
  selector: 'page-petFeed',
  templateUrl: 'petFeed.html'
})
export class PetFeed {

  pets: FirebaseListObservable<any>;
  pages: Array<{title: string, component: any}>;

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public alertCtrl: AlertController,
    public angFire: AngularFire, @Inject(FirebaseApp) firebase: any) {
    this.pets = angFire.database.list('/pets');
  }

  pickSpecies(species: string){
    this.pets = this.angFire.database.list('/pets', {
      query: {
        orderByChild: 'species',
        equalTo: species
      }
    });
  }

  filter(e) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: e
    });
  }

  changePage(pet){
    this.navCtrl.push(PetDetail, {
      pet: pet
    });
  }

  regPetPet(pet){
    this.navCtrl.push(RegPet, {
      pet: pet
    });
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

}
