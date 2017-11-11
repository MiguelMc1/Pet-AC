import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController} from 'ionic-angular';
import { UsersServices } from '../../providers/users-services';
import { RegPet } from '../regPet/regPet';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersServices]
})
export class LoginPage {
  public email: any;
  public password: any;

  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private usersServices: UsersServices,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUserUp(){
    this.usersServices.signUpUser(this.email, this.password)
    .then(authData => {
      this.navCtrl.setRoot(RegPet);
    }, error => {
      //alert("error");
    });
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true,
    });
    loader.present();
  }

  userLogin(){
    this.usersServices.loginUser(this.email, this.password)
    .then(auth => {
      this.navCtrl.push(RegPet);
    }, error => {
      let alert = this.alertCtrl.create({
        title: 'Error loggin in',
        subTitle: error.message,
        buttons: ['OK']
      });
      alert.present();
    });
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true,
    });
    loader.present();
    setTimeout(() => {
    loader.dismiss();
    }, 1000);
  }

}

  /*login() {
    this.angfire.auth.login({
      email: this.email,
      password: this.password
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((response) => {
        console.log('Login success' + JSON.stringify(response));
        let currentuser = {
          email: response.auth.email,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
        this.navCtrl.pop();
      }).catch((error) => {
        console.log(error);
    })
  }*/
