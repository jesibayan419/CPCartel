import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ProductPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
    ]),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
