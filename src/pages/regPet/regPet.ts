import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { PostService } from '../../providers/post-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseApp } from 'angularfire2';
import { PetFeed } from '../petFeed/petFeed';
import { FileChooser, FilePath, File } from 'ionic-native';
import firebase from 'firebase';

/*
  Generated class for the Upload page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-regPet',
  templateUrl: 'regPet.html',
  providers: [PostService]
})
export class RegPet {

  pets: FirebaseListObservable<any>;
  nativepath: any;
  firestore = firebase.storage();

  private sex: any;
  private name: any;
  private breed: any;
  private info: any;
  private age: any;
  private file: any;
  private petID: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private loadingCrtl: LoadingController,
    private viewCtrl: ViewController,
    private postService: PostService,
    private alertCtrl: AlertController,
    public angFire: AngularFire,
    public zone: NgZone){}



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPet');
  }

  done(){
    FileChooser.open().then((url) => {
      (<any>window).FilePath.resolveNativePath(url, (result) => {
        this.nativepath = result;
        this.regPetimage();
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
    this.postService.newPet(this.name, this.age, this.breed, this.info, this.sex)
    .then(() => {
      this.navCtrl.setRoot(PetFeed);});
  }

  regPetimage() {
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

  close() {
    this.viewCtrl.dismiss();
  }

}
