import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './common/admin/admin.component';
import { KapcsolatComponent } from './common/kapcsolat/kapcsolat.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'kulfoldi-utak',
    component: Cat01Component,
  },
  {
    path: 'belfoldi-utak',
    component: Cat02Component,
  },
  {
    path: 'kapcsolat',
    component: KapcsolatComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
