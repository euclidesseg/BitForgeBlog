import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    standalone:true,
    imports:[CommonModule, RouterModule],
    templateUrl:'./auth.component.html',
    styleUrl:'./auth.component.css'
})
export default class AuthComponent{}