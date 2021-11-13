import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChildComponent } from './add-child/add-child.component';
import { AdminRegistroComponent } from './admin-registro/admin-registro.component';

const routes: Routes = [
  { path: 'registro', component: AddChildComponent },
  { path: 'admin-registro', component: AdminRegistroComponent },
  { path: '', redirectTo: '/registro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
