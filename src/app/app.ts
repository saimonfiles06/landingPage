import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Actualidad } from './actualidad/actualidad';
import { Tormenta } from './tormenta/tormenta';
import { Socio } from './socio/socio';
import { Patrocinadores } from './patrocinadores/patrocinadores';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,Actualidad, Tormenta,Socio,Patrocinadores,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landingPage');
}
