import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Character } from './models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private dbPath = '/characters';
  charactersRef: AngularFirestoreCollection<Character>;


  constructor(
    private db: AngularFirestore
  ) { 
    this.charactersRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.charactersRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewCharacter(character: Character) : any {
    return new Observable(obs => {
      this.charactersRef.add({...character}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.charactersRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(character:Character) {
    return new Observable(obs => {
      this.charactersRef.doc(character.id).update(character);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`characters/${id}`).delete();
  }
}
