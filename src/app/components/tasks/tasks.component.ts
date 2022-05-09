import { Component, OnInit, } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { TaskService } from '../../service/task.service';//importamos el TaskServer
import { Task } from '../../Task'; //importamos la intefaz de tasks
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //dejamos la lista  vacia
  tasks: Task[] = [];

  //definimos como servicio privado a TaskService
  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    //like promise
    this.taskService.getTasks().subscribe((tasks)=>(
      this.tasks = tasks
    ));
  }
  //creamos una función que resibe una task y elimina la task que resibe por su ID
  deleteTask(task: Task){
    this.taskService.deleteTask(task)
    .subscribe(()=>(
      this.tasks = this.tasks.filter( (t) => t.id !== task.id)
    ));
  }
  //Creamos una función para cambiar el estado del Reminder
  ToggleReminder(task: Task){
    task.reminder = !task.reminder;
    //llamamos al servicio taskservice con la funcion updateTaskRemander y le pasamos como parametro a task
    this.taskService.updateTaskRemander(task).subscribe();
  }
  //creamos una funcion que llama al task service y utilizamos el metodo addtask para pasarle los datos 
  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task)=>(
      this.tasks.push(task)
    ))
  }

}
