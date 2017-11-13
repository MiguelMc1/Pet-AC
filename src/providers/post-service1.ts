import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the PostService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostService1 {

  constructor(public http: Http) {
    console.log('Hello PostService1 Provider');
  }

  newAlert(name, lastname, email, alert){
    var postData = {
      name: name,
      lastname: lastname,
      email: email,
      alert: alert
    };

    var newPostKey = firebase.database().ref().child('alerts').push().key;
    var updates = {};
    updates['/alerts/' + newPostKey] = postData;
    console.log(newPostKey);
    return firebase.database().ref().update(updates);
  }

}
