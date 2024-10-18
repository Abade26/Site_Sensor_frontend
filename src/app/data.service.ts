import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dadosCollection = collection(this.firestore, 'sua_colecao');

  constructor(private firestore: Firestore) {}

  adicionarDados(dados: any): Promise<any> {
    return addDoc(this.dadosCollection, dados);
  }

  obterDados(): Observable<any[]> {
    return collectionData(this.dadosCollection);
  }
}
