import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of} from 'rxjs';
import { TASK } from '../mock-tasks';
import { Task } from '../Task';


const  HttpOptions = { 
  //definimos que los nuevos header que vamos a enviar por peticion, Son una nueva instancia de tipo HttpHeaders
  headers: new HttpHeaders({
    //definimos que va a ser de un tipo json
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //creamos una constante para guardar la Url del servidor local
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(
    private http:HttpClient
  ) { }

  //Creamos una funcion para retornar todas las Tareas("Tasks") de db.json 
  getTasks():Observable<Task[]>{
    //Retormanos la url para que todos los componentes
    return this.http.get<Task[]>(this.apiUrl)
  }

  //Creamos una funcion para eliminar las tareas por su ID de db.json
  deleteTask(task: Task): Observable<Task>{
    //Llamamos a la url pasandole el ID de la tarea 
    const url =`${this.apiUrl}/${task.id}`;
    //Retornamos el delete con la url con su ID de la tarea 
    return this.http.delete<Task>(url);
  }

  //Cremaos una funcion para poder modificar el estado del reminder de db.json
  updateTaskRemander(task: Task): Observable<Task>{
    //llamamos a la url pasandole el ID de la tarea
    const url =`${this.apiUrl}/${task.id}`;
    //retornamos una actualizacion del la task
    return this.http.put<Task>(url, task, HttpOptions);
  } 

  //Creamos una funcion para poder enviar los datos del formulario al archivo db.json
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, HttpOptions);
  }
}
