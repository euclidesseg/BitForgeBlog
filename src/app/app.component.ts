import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Mode, ThemeService } from '@shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BitForging.Blog';
  constructor(@Inject(DOCUMENT) private document:Document){
    const modeSelected:Mode = JSON.parse(localStorage.getItem('theme')!);
    if(modeSelected){
      this.document.body.classList.add(modeSelected.mode)
    }
  }
}
