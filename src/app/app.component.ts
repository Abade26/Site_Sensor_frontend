import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';

interface Dado {
  temperatura: number;
  umidade: number;
  co2?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  title: string = 'Sensor MQ_135';
  dados: Dado[] = [
    { temperatura: 30, umidade: 0.3, co2: 0 }
  ];
  dadosRecebidos: Dado[] = [];  // Adicionando a propriedade

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  async enviarDados(index: number) {
    const co2Value = this.dados[index].co2;
    console.log(`Valor de CO² para envio: ${co2Value}`);

    if (typeof co2Value === 'number' && !isNaN(co2Value)) {
      try {
        await this.firebaseService.addData('sua_colecao', {
          temperatura: this.dados[index].temperatura,
          umidade: this.dados[index].umidade,
          co2: co2Value
        });
        alert('Dados enviados com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao enviar dados. Tente novamente.');
      }
    } else {
      alert('Por favor, insira um valor válido de CO².');
    }
  }

  async verificarDados() {
    console.log('verificarDados chamado'); // Para ver se a função é chamada
    try {
      const dadosRecebidos = await this.firebaseService.getData('string');
      console.log('Dados recebidos: ', dadosRecebidos); // Verifique se os dados são recebidos
      this.router.navigate(['/dados-recebidos'], { state: { dados: dadosRecebidos } });
    } catch (error) {
      console.error('Erro ao buscar dados do Firebase:', error);
      alert('Erro ao buscar dados. Tente novamente.');
    } finally {
    }
  }
  
}
