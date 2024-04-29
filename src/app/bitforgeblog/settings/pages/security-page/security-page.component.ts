import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-security-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './security-page.component.html',
  styleUrl: './security-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SecurityPageComponent { }
