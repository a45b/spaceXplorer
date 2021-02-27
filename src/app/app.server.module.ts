import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'app-root'}),
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
