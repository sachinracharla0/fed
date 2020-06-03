import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeFedComponent } from './home-fed/home-fed.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeFedDetailComponent } from './home-fed-detail/home-fed-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeFedComponent,
    HeaderComponent,
    HomeFedDetailComponent
  ],
  imports: [
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
