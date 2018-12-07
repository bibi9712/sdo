import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { entiteGroup } from './group/entiteGroup';


@Injectable()
export class GroupService {
   private user: firebase.User;
   ref = firebase.database().ref('groups/');

    constructor() {}


    saveGroup(group: entiteGroup){
        this.ref.push(group);
    }
}