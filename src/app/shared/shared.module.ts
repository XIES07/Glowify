import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardsComponent } from './components/card/cards.component';
import { ProductsService } from './services/products.service';
import { StoreModule } from '@ngrx/store';
import { localStorageSyncReducer, reducers } from './ngrx/app-state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

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
    StoreModule.forRoot(reducers, {
      metaReducers: [localStorageSyncReducer],
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    services,
  ],
  bootstrap: [],
  exports: [components],
})
export class SharedModule { }