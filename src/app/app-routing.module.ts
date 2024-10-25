import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // O componente principal
import { DadosRecebidosComponent } from './dados-recebidos/dados-recebidos.component'; // O novo componente

const routes: Routes = [
  { path: '', component: AppComponent }, // Componente principal
  { path: 'dados-recebidos', component: DadosRecebidosComponent }, // Nova rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
