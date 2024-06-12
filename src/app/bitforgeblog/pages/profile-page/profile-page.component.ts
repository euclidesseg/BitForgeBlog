import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ProfileComponent from '@routes/bitforgeblog/components/profile/profile.component';

@Component({
  selector: 'app-profile-page',
  standalone:true,
  template:`<app-profile></app-profile>`,
  styleUrl: './profile-page.component.css',
  imports:[ProfileComponent]
})
export default class ProfilePageComponent {

}
