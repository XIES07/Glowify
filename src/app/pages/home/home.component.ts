import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  acercaDe = {
    descripcion: 'Esta es una página comercial donde podrás:',
    caracteristicas: [
      { icono: 'bi-eye-fill', texto: 'Ver productos destacados' },
      { icono: 'bi-heart-fill', texto: 'Dar "Me gusta" a productos' },
      { icono: 'bi-cart4', texto: 'Agregar productos al carrito' }
    ],
    nota: 'No se requieren datos personales para interactuar con la plataforma'
  };

  portafolio = {
    url: 'https://tu-portafolio.com',
    texto: 'Visitar mi portafolio'
  };

  stacks = [
    { icono: 'bi-lightning-charge-fill', titulo: 'NGRX', color: 'title-home', link:'https://ngrx.io/' },
    { icono: 'bi-puzzle-fill', titulo: 'Angular', color: 'title-home', link:'https://angular.dev/overview' },
    { icono: 'bi-bootstrap-fill', titulo: 'Bootstrap', color: 'title-home', link:'https://getbootstrap.com/' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
