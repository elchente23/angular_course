import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

import { PeliculasService } from './services/peliculas.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    ImagenesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
