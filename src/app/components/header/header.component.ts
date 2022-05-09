import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title:string= 'My Task List';
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService:UiService,
    private router:Router
  ) {
    this.subscription = this.uiService.onToggle()
                              .subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }
  
  //creamos una funcion que cuando el usuario haga click sobre el boton mueste en consola
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
