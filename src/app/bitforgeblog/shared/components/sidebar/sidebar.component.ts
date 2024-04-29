import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Route, RouterModule, RouterOutlet } from '@angular/router';
import { RoutesService } from '@shared/services/routes.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export default class SidebarComponent { 
  constructor(public routesService:RoutesService){}
 
  routesItems = this.routesService.getRooutes();
  
}
