import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import ArticleblogComponent from '@routes/bitforgeblog/components/articleblog/articleblog.component';
import PrimeModule from '@routes/bitforgeblog/primeModule.module';
import Splide from '@splidejs/splide';

export interface Filters {
  name: string,
  code: string
}

@Component({
  selector: 'app-blog-page',
  standalone: true,
  templateUrl: './blog-page.component.html',
  imports:
    [
      ArticleblogComponent,
      PrimeModule,
    ],
  styleUrl: './blog-page.component.css',
})
export default class BlogPageComponent implements OnInit {
  public filters: Filters[] = [];
  ngOnInit(): void {
    this.filters = [
      { name: 'Todos', code: 't' },
      { name: 'Mis articulos', code: 'M' },
      { name: 'Mis escritores', code: 'S' }
    ]
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 1,
      autoplay:true,
      direction:'ltr',
      arrows:false,
      pagination:false,
      gap:".5rem",
      autoScroll: {
        speed: 1,
      },
    });

    splide.mount();

  }


  public selectedCity: string = 'Todos';

  public formGroup: FormGroup = new FormGroup({
    selectedFilter: new FormControl<Filters | null>(null)
  });
}
