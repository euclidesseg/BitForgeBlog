import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import PrimeModule from '../primeModule.module';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [
    CommonModule,
    PrimeModule,
  ],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StatisticComponent {
  public activeIndex = 0
 }
