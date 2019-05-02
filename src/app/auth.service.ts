import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private firebaseUser: Observable<firebase.User>;
  public user: firebase.User = null;

  constructor(public angularFireAuth: AngularFireAuth) { 
    this.firebaseUser = angularFireAuth.authState;
    this.firebaseUser.subscribe(
      (firebaseUser) => {
        if (firebaseUser) {
          this.user = firebaseUser;
          //console.log(this.user);
        }
        else {
          this.user = null; 
        }
      }
    );
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.angularFireAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }
}
