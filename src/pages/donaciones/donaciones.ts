
import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { PostService0 } from '../../providers/post-service0';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { FileChooser, FilePath, File } from 'ionic-native';
import firebase from 'firebase';
import { Page5 } from '../page5/page5';

@Component({
  selector: 'page-donaciones',
  templateUrl: 'donaciones.html',
  providers: [PostService0]
})
export class DonacionesPage{
  donaciones: FirebaseListObservable<any>;
  pages: Array<{title: string, component: any}>;
  nativepath: any;
  firestore = firebase.storage();

  private articulo: any;
  private animal: any;
  private tam: any;
  private info: any;
  private artID: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private loadingCrtl: LoadingController,
    private viewCtrl: ViewController,
    private postService0: PostService0,
    private alertCtrl: AlertController,
    public angFire: AngularFire,
    public zone: NgZone){}




    ionViewDidLoad() {
  console.log('ionViewDidLoad Donaciones');
}

done(){
  FileChooser.open().then((url) => {
    (<any>window).FilePath.resolveNativePath(url, (result) => {
      this.nativepath = result;
      this.uploadimage();
    })
  })
  let loading = this.loadingCrtl.create({
    dismissOnPageChange: true,
    content: "Posting.."
  });
  loading.present();
  setTimeout(() => {
  loading.dismiss();
  }, 1000);
  this.postService0.newDonacion(this.articulo, this.animal, this.tam, this.info)
  .then(() => {
    this.navCtrl.setRoot(Page5);
  });
}
uploadimage() {
  (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
    res.file((resFile) => {
      var reader = new FileReader();
      reader.readAsArrayBuffer(resFile);
      reader.onloadend = (evt: any) => {
        var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
        var imageStore = this.firestore.ref().child('image');
        imageStore.put(imgBlob).then((res) => {
          alert('Upload Success');
        }).catch((err) => {
          alert('Upload Failed' + err);
        })
      }
    })
  })
}



}
