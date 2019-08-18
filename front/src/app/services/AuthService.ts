import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {
  }
  async login(email: string, password: string) {
    return await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    return await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
