import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const components = [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
]

const services = [
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [components],
})
export class SharedModule { }