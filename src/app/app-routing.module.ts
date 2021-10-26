import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { GatosComponent } from './pagina/gatos/gatos.component';
import { PerrosComponent } from './pagina/perros/perros.component';
import { PrincipalComponent } from './pagina/principal/principal.component';
import { TortugasComponent } from './pagina/tortugas/tortugas.component';

const routes: Routes = [
  {path:'principal',component:PrincipalComponent},
  {path:'perros',component:PerrosComponent},
  {path:'gatos',component:GatosComponent},
  {path:'tortugas',component:TortugasComponent},
  {path:'',redirectTo:'/principal',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
