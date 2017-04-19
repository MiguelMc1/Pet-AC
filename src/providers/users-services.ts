import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UsersServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersServices {

  public fireAuth: any;
  public userProfile: any;

  constructor(public http: Http) {
    console.log('Hello UsersServices Provider');
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
  }

  loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  logoutUser(){
 	  return this.fireAuth.signOut();
 	  //redirection
  }

  forgotPasswordUser(email: any){
 	  return this.fireAuth.sendPasswordResetEmail(email);
  }

  signUpUser(email: string , password: string){
  	return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => {
  		//sign in the user
  		this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser) => {
  			//successful login, create user profile
  		this.userProfile.child(authenticatedUser.uid).set({
  			email: email
  		});
  		});
  	});
  }


      /*catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });

        })
      }
  }*/
}
