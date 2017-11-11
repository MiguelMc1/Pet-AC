import { Component, NgZone } from '@angular/core';
import { MyApp } from '../../app/app.component';
import { NavController, NavParams, ModalController, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { PostService1 } from '../../providers/post-service1';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { FileChooser, FilePath, File } from 'ionic-native';
import firebase from 'firebase';
import { PetFeed } from '../petFeed/petFeed';
/*
  Generated class for the Adopt page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
  providers: [PostService1]
})
export class Alerts {

  Alert: FirebaseListObservable<any>;
  pages: Array<{title: string, component: any}>;
  nativepath: any;
  firestore = firebase.storage();

  private name: any;
  private lastname: any;
  private email: any;
  private report: any;
  private alertID: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private loadingCrtl: LoadingController,
    private viewCtrl: ViewController,
    private postService1: PostService1,
    private alertCtrl: AlertController,
    public angFire: AngularFire,
    public zone: NgZone){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Alerts');
  }

  done(reporte) {
    let alert = this.alertCtrl.create({
      title: 'Reporte Completado',
      subTitle: 'Muchas gracias por reportar lo sucedido, en breve lo arreglaremos.',
      buttons: [{
        text: "OK",
        handler: data => {
          this.navCtrl.push(MyApp, {
          });
        }
      }]
    });
    let loading = this.loadingCrtl.create({
      dismissOnPageChange: true,
    });
    loading.present();
    setTimeout(() => {
    loading.dismiss();
    }, 1000);
    this.postService1.newAlert(this.name, this.lastname, this.email, this.report)
    .then(() => {
      this.navCtrl.setRoot(PetFeed);
    });
    alert.present();
  }

}
