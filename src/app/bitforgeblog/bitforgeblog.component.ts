import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import SidebarComponent from "./shared/components/sidebar/sidebar.component";
import NavbarComponent from "./shared/components/navbar/navbar.component";
import FooterComponent from "./shared/components/footer/footer.component";

@Component({
    standalone:true,
    imports:[RouterOutlet, SidebarComponent, NavbarComponent, FooterComponent],
    templateUrl:'./bitforgeblog.component.html',
    styleUrl:'./bitforgeblog.component.css'
})
export default class BitForgeBlog{}