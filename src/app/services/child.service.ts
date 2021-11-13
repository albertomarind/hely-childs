import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DocumentReference } from 'firebase/firestore';
import { Child } from '../models/child';
@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private afs: AngularFirestore) { }
  public save(child: Child): Promise<any> {
    return this.afs.collection('childs').add(child);
  }
}
