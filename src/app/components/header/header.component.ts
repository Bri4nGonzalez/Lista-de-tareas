import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title:string= 'My Task List';

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleAddTask(){
    console.log("toggleAddTask!");//creamos una funcion que cuando el usuario haga click sobre el boton mueste en consola
  }
}
