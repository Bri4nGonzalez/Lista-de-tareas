import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UiService {
  //Creamos una varible para controlar cuando queramos ocultar o mostrar el formulario
  private showAddTask:boolean = false;
  //
  private subjet = new Subject<any>();

  constructor() { }

  //creamos una funcion para modificar el estado de ShowAddTask 
  toggleAddTask():void{
    console.log("toggleAddTask");
    this.showAddTask = !this.showAddTask;
    this.subjet.next(this.showAddTask);
  }
  //
  onToggle(): Observable<any>{
    return this.subjet.asObservable();
  }
}
