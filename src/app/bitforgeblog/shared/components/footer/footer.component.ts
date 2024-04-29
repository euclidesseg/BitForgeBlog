import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesService } from '@shared/services/routes.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FooterComponent {
  constructor(public routesService:RoutesService){}
 
  routesItems = this.routesService.getRooutes().filter(route => route.path !== 'profile');
 }
