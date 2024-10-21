import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule] 
})
export class AppComponent {
  title: string = 'Sensor_MQ_135';
  dados: any[] = [
    { temperatura: 30, umidade: 0.3 }
  ];

  enviarDados() {
    console.log('Dados enviados!');
  }
}
