import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http'
import { Observable, of} from 'rxjs';
import { TASK } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';//creamos una constante para guardar la Url del servidor local

  constructor(
    private http:HttpClient
  ) { }

  getTasks():Observable<Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl)//retormanos la url para que todos los componentes
  }
}
