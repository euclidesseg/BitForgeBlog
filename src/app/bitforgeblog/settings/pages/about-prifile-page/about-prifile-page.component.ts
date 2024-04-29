import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-prifile-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about-prifile-page.component.html',
  styleUrl: './about-prifile-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPrifilePageComponent { }
