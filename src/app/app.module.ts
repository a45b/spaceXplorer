import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { HttpInterceptorService } from './http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
