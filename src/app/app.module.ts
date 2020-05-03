import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {AppComponent} from './core/app.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
