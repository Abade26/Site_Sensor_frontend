import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Isso torna o componente standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule] // Importa CommonModule para usar *ngFor e outras diretivas
})
export class AppComponent {
  title: string = 'Sensor_MQ_135';
  dados: any[] = [
    { temperatura: 30, umidade: 0.3 },
    { temperatura: 26, umidade: 0.95 }
  ];

  enviarDados() {
    console.log('Dados enviados!');
  }
}
