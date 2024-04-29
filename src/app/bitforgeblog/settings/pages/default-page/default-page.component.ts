import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [
    CommonModule,RouterModule
  ],
  templateUrl: './default-page.component.html',
  styleUrl: './default-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DefaultPageComponent { }
