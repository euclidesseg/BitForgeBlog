import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StatisticsPageComponent { }
