import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pelicula/:id', component: PeliculaComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);