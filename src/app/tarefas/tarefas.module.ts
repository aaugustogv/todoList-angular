import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasService } from './shared/tarefas.service';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';



@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [TarefasService]
})
export class TarefasModule { }