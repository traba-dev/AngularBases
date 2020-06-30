import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MenuComponent } from './components/menu/menu.component';
import { AppModulePages } from './pages/app.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModulePages
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
