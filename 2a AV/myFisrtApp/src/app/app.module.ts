import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, ClientesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//Aquí importamos los componentes o los modulos que vamos a utilizar en nuestra aplicación
