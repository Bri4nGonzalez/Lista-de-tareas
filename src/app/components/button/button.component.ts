import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();//creamos una evento que enviera fuera del componte boton 

  constructor() { }

  ngOnInit(): void {
  }
  //creamos una funcion para cuando el usuario presione el boton
  onClick(){
    this.btnClick.emit();//emitimos la funcion para que se pueda usar fuera del componente 
  }

}
