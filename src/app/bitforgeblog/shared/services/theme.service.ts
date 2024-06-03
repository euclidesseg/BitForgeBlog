import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Mode{
  mode:string;
}
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _modeSelected = new BehaviorSubject<Mode>({mode:'light'});
  modeSelected: Observable<Mode> = this._modeSelected.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  selectMode(mode:string){
    while(this.document.body.classList.length > 0){
      this.document.body.classList.remove(this.document.body.classList.item(0)!);
    }
    this.document.body.classList.add(mode, "bg__body")
    this._modeSelected.next({mode:mode});
    localStorage.setItem('theme', JSON.stringify(this._modeSelected.value))
  }
}
