import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class AppComponent {
  title: string = 'Sensor_MQ_135';
  dados: { temperatura: number; umidade: number; co2?: number }[] = [
    { temperatura: 30, umidade: 0.3 }
  ];

  enviarDados(index: number) {
    const co2Value = this.dados[index].co2;
    if (co2Value !== undefined) {
      console.log(`Enviando CO²: ${co2Value} ppm`);
    } else {
      alert('Por favor, insira um valor válido de CO².');
    }
  }

  verificarDados(index: number) {
    console.log(`Verificando dados para o índice: ${index}`);
  }

  enviarTodosDados() {
    console.log('Enviando todos os dados...', this.dados);
  }
}
