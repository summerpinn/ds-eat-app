import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Shop } from 'src/app/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopFirestoreService {
  constructor(private firestore: AngularFirestore) { }

  getShops() {
    return this.firestore.collection('shops').snapshotChanges();
  }

  addShop(shop) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("shops")
        .add(shop)
        .then(res => { }, err => reject(err));
    });
  }

  checkInShop(shop: Shop) { 
    shop.lastVisit = Date.now(); 
    return this.firestore.collection('shops').doc(shop.id).update(shop); 
  }

  //For development purpose 
  hello() { 
    console.log("Hello"); 
  }
}
