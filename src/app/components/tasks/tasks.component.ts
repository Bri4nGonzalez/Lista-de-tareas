import { Component, OnInit, } from '@angular/core';
import { TaskService } from '../../service/task.service';//importamos el TaskServer
import { Task } from '../../Task'; //importamos la intefaz de tasks
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];//dejamos la lista  vacia
  
  constructor(
    private taskService: TaskService//definimos como servicio privado a TaskService
  ) {}

  ngOnInit(): void {
    //like promise
    this.taskService.getTasks().subscribe((tasks)=>(
      this.tasks = tasks
    ));
  }

}
