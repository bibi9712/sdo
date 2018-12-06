import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { entiteGroup } from './group/entiteGroup';


@Injectable()
export class GroupService {
   private user: firebase.User;
   ref = firebase.database().ref('groups/');

    constructor() {}


    saveGroup(group: entiteGroup){
        
    }
    


}