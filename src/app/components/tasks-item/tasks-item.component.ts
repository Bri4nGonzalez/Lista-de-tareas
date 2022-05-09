import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { TASK } from '../../mock-tasks'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  //inicializamos con la primera tarea de la lista
  @Input() task: Task = TASK [0];
  //creamos una instancia de tipo que Task,que va a ser de tipo emiter para que opere fuera del componente en una la lista 
  //para poder elinminar las task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  //Creamos una instancia para modificar el estado de reminder 
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  //definimos el icono
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  //creamos una funcion para eliminar las task
  onDelete(task: Task){
    //llamamos a onDeleteTask y le pasamos la task para que lo emita fuera del componente
    this.onDeleteTask.emit(task);
  }
  //Creamos una funcion para cambiar el estado de reminder(recordatorio) 
  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
}
