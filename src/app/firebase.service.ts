import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app: any;
  private firestore: any;

  constructor() {
    this.app = initializeApp(environment.firebase);
    this.firestore = getFirestore(this.app);
  }

  async addData(collectionName: string, data: any) {
    try {
      const docRef = await addDoc(collection(this.firestore, collectionName), data);
      console.log('Documento escrito com ID: ', docRef.id);
    } catch (e) {
      console.error('Erro ao adicionar documento: ', e);
    }
  }

  async getData(collectionName: string): Promise<any[]> {
    const querySnapshot = await getDocs(collection(this.firestore, collectionName));
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() }); 
    });
    return data;
  }
}
