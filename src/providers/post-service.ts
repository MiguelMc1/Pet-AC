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
export class PostService {

  constructor(public http: Http) {
    console.log('Hello PostService Provider');
  }

  newPet(name, age, breed, info, sex){
    var postData = {
      name: name,
      age: age,
      breed: breed,
      info: info,
      sex: sex
    };

    var newPostKey = firebase.database().ref().child('pets').push().key;
    var updates = {};
    updates['/pets/' + newPostKey] = postData;
    console.log(newPostKey);
    return firebase.database().ref().update(updates);
  }

}
