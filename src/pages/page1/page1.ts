import { Component, Inject } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  pets: FirebaseListObservable<any>;
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    angFire: AngularFire, @Inject(FirebaseApp) firebase: any) {
    this.pets = angFire.database.list('/pets');
  }

  addPet():void{
    let prompt = this.alertCtrl.create({
      title: 'Registro de Mascotas',
      message: 'Ingrese la información',
      inputs:[
        {
          name: 'name',
          placeholder: "Nombre"
        },
        {
          name: 'age',
          placeholder: "Edad"
        },
        {
          name: 'sex',
          placeholder: "Género"
        },
        {
          name: 'breed',
          placeholder: "Raza"
        },
        {
          name: 'info',
          placeholder: "Descripción"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          handler: data => {
            console.log("cancel cliked");
          }
        },
        {
          text: "Guardar",
          handler: data => {
            this.pets.push({
              name: data.name,
              age: data.age,
              sex: data.sex,
              breed: data.breed,
              info: data.info
            })
          }
        }
      ]
    });
    prompt.present();
  }

  changePage(pet){
    this.navCtrl.push(DetailPage, {
      pet: pet
    });
  }

}
