import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
     ListaComponent,
     UsuarioComponent
     ],
  imports: [
    CommonModule
  ],
  exports: [   // Exportd para usar los componentes  fuera del modulo
    ListaComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
