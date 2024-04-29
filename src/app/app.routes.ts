import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'bitforgeblog',
        title: '',
        loadComponent: () => import('./bitforgeblog/bitforgeblog.component'),
        children: [
            {
                path: 'blogs',
                title: 'Blogs',
                loadComponent: () => import('./bitforgeblog/pages/blog-page/blog-page.component'),
            },
            {
                path: 'messages',
                title: 'Mensajes',
                loadComponent: () => import('./bitforgeblog/pages/message-page/message-page.component')
            },
            {
                path: 'statistics',
                title: 'Estadisticas',
                loadComponent: () => import('./bitforgeblog/pages/statistics-page/statistics-page.component')
            },
            {
                path: 'profile',
                title: 'Perfil',
                loadComponent: () => import('./bitforgeblog/pages/profile-page/profile-page.component')
            },
            {
                path: 'settings',
                title: 'Configuraciones',
                loadComponent: () => import('./bitforgeblog/settings/settings.component'),
                children:[
                    {
                        path:'language',
                        title:'language-&-region',
                        loadComponent: () => import('./bitforgeblog/settings/pages/language-region-page/language-region-page.component')
                    },
                    {
                        path:'theme',
                        title:'theme',
                        loadComponent: () => import('./bitforgeblog/settings/pages/theme-page/theme-page.component')
                    },
                    {
                        path:'about',
                        title:'Información del perfil',
                        loadComponent: () => import('./bitforgeblog/settings/pages/about-prifile-page/about-prifile-page.component')
                    },
                    {
                        path:'security',
                        title:'seguridad',
                        loadComponent: () => import('./bitforgeblog/settings/pages/security-page/security-page.component')
                    },
                    {
                        path:'',
                        loadComponent: () => import('./bitforgeblog/settings/pages/default-page/default-page.component'),
                        pathMatch:'full'
                    },
                ]
            },
            {
                path: '**',
                redirectTo: 'blogs'
            }
        ]
    },
    {

        path: 'auth',
        title: '',
        loadComponent: () => import('./bitforgeblog/auth/auth.component'),
        children: [
            {
                path: 'login',
                title: 'Log-In',
                loadComponent: () => import('./bitforgeblog/auth/pages/login-page/login-page.component'),
            },
            {
                path: 'signup',
                title: 'Sign-Up',
                loadComponent: () => import('./bitforgeblog/auth/pages/signup-page/signup-page.component')
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },

    {
        path: '',
        redirectTo: 'bitforgeblog',
        pathMatch: 'full'
    }
];
