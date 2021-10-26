import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Seccion1Component } from './componentes/seccion1/seccion1.component';
import { Seccion2Component } from './componentes/seccion2/seccion2.component';
import { Seccion3Component } from './componentes/seccion3/seccion3.component';
import { Seccion4Component } from './componentes/seccion4/seccion4.component';
import { PrincipalComponent } from './pagina/principal/principal.component';
import { PerrosComponent } from './pagina/perros/perros.component';
import { GatosComponent } from './pagina/gatos/gatos.component';
import { TortugasComponent } from './pagina/tortugas/tortugas.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    PrincipalComponent,
    PerrosComponent,
    GatosComponent,
    TortugasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
