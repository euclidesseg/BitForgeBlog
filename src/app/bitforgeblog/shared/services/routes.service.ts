import { Injectable } from "@angular/core";
import { Routes } from "@angular/router";
import { routes } from "@routes/app.routes";
@Injectable({
    providedIn:'root'
})
export class RoutesService{


    public menuItems!:Routes;
    public configItems!:Routes;
    getRooutes(){
        this.menuItems = routes
        .filter(routes => routes.path && !routes.path?.includes('auth'))
        .map(route => route.children ?? [])
        .flat()
        .filter(routes => routes && routes.path && routes.path != '**')
        .sort()
        return this.menuItems
    }

    getRoutesOfConfiguration(){
      this.configItems = routes
      .filter(route => route.path && route.path.includes(''))
    }
    getClass(title: string): string {
        switch (title) {
          case 'Blogs':
            return 'fa-house';
          case 'Mensajes':
            return 'fa-message'
          case 'Estadisticas':
            return 'fa-doutone fa-chart-simple'
          case 'Perfil':
            return 'fa-address-card'
          case 'Configuraciones':
            return 'fa-gears'
          default: return ''
        }
      }
}