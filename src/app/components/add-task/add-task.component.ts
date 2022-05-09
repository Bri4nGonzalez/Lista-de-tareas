import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';  
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  //definimos las variables que vamos a resibir del formulario y su tipo
  text:string ="";
  day:string = "";
  reminder:boolean = false;
  showAddTask:boolean = false;
  subscription?: Subscription;

  constructor(
    private uiservice: UiService
  ) { 
    this.subscription = this.uiservice.onToggle()
                              .subscribe(value => this.showAddTask = value) 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length === 0){
      alert("Pleace add a task");
      return
    }
    const {text,day,reminder} = this;
    const newTask = {text,day,reminder};

    this.onAddTask.emit(newTask);
  }

}
