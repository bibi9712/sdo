import { Injectable } from '@angular/core';
import { EntiteUser } from '../profil/EntiteUser';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class ConnexionService {
    userFind: EntiteUser;

    constructor(public dataBase: AngularFireDatabase) { }

    getUses() : Observable<EntiteUser[]>{
       return this.dataBase.list<EntiteUser>('/users/').valueChanges();
    }

    addUser(user: EntiteUser) {
       let id = this.dataBase.createPushId();
       user.id = id;
       this.dataBase.list('/users').push(user);
    }


}