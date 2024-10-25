import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Dado {
  temperatura: number;
  umidade: number;
  co2?: number;
}

@Component({
  selector: 'app-dados-recebidos',
  templateUrl: './dados-recebidos.component.html',
  styleUrls: ['./dados-recebidos.component.css'],
})
export class DadosRecebidosComponent {
  dadosRecebidos: Dado[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const dados = navigation.extras.state['dados']; // Acesso via colchetes
      if (Array.isArray(dados)) {
        this.dadosRecebidos = dados; // Atribuição segura
      }
    }
  }
}
