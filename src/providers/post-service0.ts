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
export class PostService0 {

  constructor(public http: Http) {
    console.log('Hello PostService0 Provider');
  }

  newDonacion(articulo, animal, tam, info){
    var postData = {
      articulo: articulo,
      animal: animal,
      tam: tam,
      info: info,
    };

    var newPostKey = firebase.database().ref().child('regDonation').push().key;
    var updates = {};
    updates['/regDonation/' + newPostKey] = postData;
    console.log(newPostKey);
    return firebase.database().ref().update(updates);
  }

}
