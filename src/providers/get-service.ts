import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GetServiceProvider {

  pets: FirebaseListObservable<any>;

  constructor(public http: Http, angFire: AngularFire,
    @Inject(FirebaseApp) firebase: any) {
    this.pets = angFire.database.list('/pets');
  }

  filterItems(searchTerm){

    }

}
