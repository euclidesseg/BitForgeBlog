import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-language-region-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './language-region-page.component.html',
  styleUrl: './language-region-page.component.css',
})
export default class LanguageRegionPageComponent { }
