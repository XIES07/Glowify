import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app.routes.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './pages/home/services/home.service';
import { SharedModule } from './shared/shared.module';
import { DetailsOfProductsComponent } from './pages/details-of-products/details-of-products.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { LikesComponent } from './pages/likes/likes.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const components = [
    AppComponent,
    HomeComponent,
    DetailsOfProductsComponent,
    ProductsComponent,
    LikesComponent,
    ShoppingCartComponent,
]

const services = [
    HomeService,
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [services],
  bootstrap: [AppComponent]
})
export class AppModule { }