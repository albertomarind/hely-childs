import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DocumentReference } from 'firebase/firestore';
import { Observable, take } from 'rxjs';
import { Child } from '../models/child';
@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(private afs: AngularFirestore) { }

  save(child: Child): Promise<any> {
    return this.afs.collection('childs').add(child);
  }

  findAll(): Observable<any> {
    return this.afs.collection('childs').valueChanges({ idField: 'id' }).pipe(take(1));
  }

  deleteById(id: string): Promise<any> {
    return this.afs.doc('childs/' + id).delete();
  }

  update(id: string, child: Child): Promise<any> {
    let newChild = { ...child };
    delete newChild['id'];
    return this.afs.collection('childs').doc(id).set(newChild);
  }

}
