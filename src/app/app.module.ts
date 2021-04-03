import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductPagiComponent } from './common/product-pagi/product-pagi.component';
import { SortPipe } from './pipe/sort.pipe';
import { EmployeeCardComponent } from './common/employee-card/employee-card.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { NumberHuPipe } from './pipe/number-hu.pipe';
import { KapcsolatComponent } from './common/kapcsolat/kapcsolat.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './common/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from './pipe/category.pipe';
import { FeaturedPipe } from './pipe/featured.pipe';
import { SalesPipe } from './pipe/sales.pipe';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { LastproductnovisiblePipe } from './pipe/lastproductnovisible.pipe';
import { UniversalFilterPipe } from './pipe/universal-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    FilterPipe,
    ProductCardComponent,
    ProductPagiComponent,
    SortPipe,
    EmployeeCardComponent,
    FooterComponent,
    ProductListComponent,
    NumberHuPipe,
    KapcsolatComponent,
    AdminComponent,
    CategoryPipe,
    FeaturedPipe,
    SalesPipe,
    DataEditorComponent,
    LastproductnovisiblePipe,
    UniversalFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
