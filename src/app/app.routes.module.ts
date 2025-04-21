import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './pages/products/products.component';
import { LikesComponent } from './pages/likes/likes.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { DetailsOfProductsComponent } from './pages/details-of-products/details-of-products.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
    },
    {
        path: 'Home',
        component: HomeComponent,
    },
    {
        path: 'Products',
        component: ProductsComponent,
    },
    {
        path: 'ShoppingCart',
        component: ShoppingCartComponent,
    },
    {
        path: 'Likes',
        component: LikesComponent,
    },
    {
        path: 'detailsOfProducts/:id',
        component: DetailsOfProductsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}