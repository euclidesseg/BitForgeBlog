import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '@shared/services/theme.service';

@Component({
  selector: 'app-theme-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="w-full h-full absolute top-1/2 bottom-1/2 m-auto">
      <ul class="flex h-full w-full list-none justify-center items-center flex-row flex-nowrap gap-5 ">
        <li class="w-16  h-16 cursor-pointer shadow-xl shadow-neutral-800  bg-[#e2f0eb] text-center flex items-center justify-center rounded-full" (click)="changeTheme('light__theme')">
          <i class="fa-solid fa-w text-4xl" style="color: #04193e;"></i>
        </li>
        <li class="w-16  h-16 cursor-pointer shadow-xl shadow-neutral-800  bg-black text-center flex items-center justify-center rounded-full"(click)="changeTheme('dark__theme')">
          <i class="fa-solid fa-b text-4xl" style="color: #ffffff;"></i>
        </li>
        <li class="w-16  h-16 cursor-pointer shadow-xl shadow-neutral-800  bg-[#00a884] text-center flex items-center justify-center rounded-full"(click)="changeTheme('green__theme')">
        <i class="fa-solid fa-g text-4xl" style="color: #fafcff;"></i>
        </li>
      </ul>
    </div>
  `,
  styleUrl: './theme-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ThemePageComponent {
  private  themeService =  inject(ThemeService)


  changeTheme(theme:string){
    this.themeService.selectMode(theme);
  }
 }
