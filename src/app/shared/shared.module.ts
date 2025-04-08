import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardsComponent } from './components/card/cards.component';
import { ProductsService } from './services/products.service';

const components = [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardsComponent,
]

const services = [
    ProductsService,
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    services,
  ],
  bootstrap: [],
  exports: [components],
})
export class SharedModule { }