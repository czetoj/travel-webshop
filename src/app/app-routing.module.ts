import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './common/admin/admin.component';
import { CardDetailsComponent } from './common/card-details/card-details.component';
import { KapcsolatComponent } from './common/kapcsolat/kapcsolat.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: 'travel-webshop',
    component: HomeComponent,
  },
  {
    path: 'travel-webshop/kulfoldi-utak',
    component: Cat01Component,
  },
  {
    path: 'travel-webshop/belfoldi-utak',
    component: Cat02Component,
  },
  {
    path: 'travel-webshop/kapcsolat',
    component: KapcsolatComponent,
  },
  {
    path: 'travel-webshop/admin',
    component: AdminComponent,
  },
  {
    path: 'travel-webshop/products/:id',
    component: CardDetailsComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
