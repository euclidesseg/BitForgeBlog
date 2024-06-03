import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-articleblog',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './articleblog.component.html',
  styleUrl: './articleblog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ArticleblogComponent { }
