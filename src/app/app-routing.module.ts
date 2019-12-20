import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './authentification/admin/admin.component';
import { LoginComponent } from './authentification/login/login.component';


const routes: Routes = [
{path:'accueil',component:AccueilComponent},
{path:'presentation',component:PresentationComponent},
{path:'contact',component:ContactComponent},
{path:'admin',component:AdminComponent},
{path:'login',component:LoginComponent},
{path:'', redirectTo:'accueil',pathMatch:'full'},
  {path:'**',redirectTo:'accueil'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
