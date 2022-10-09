import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavParComponent } from './nav-par/nav-par.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './nav-par/navigation/navigation.component';
import { LocationComponent } from './location/location.component';
import { ToursComponent } from './tours/tours.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationServices } from 'src/services/Location.services';
import { EditComponent } from './location/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceServices } from 'src/services/Invoice.Services';
@NgModule({
  declarations: [
    AppComponent,
    NavParComponent,
    HomePageComponent,
    NavigationComponent,
    LocationComponent,
    ToursComponent,
    CategoriesComponent,
    EditComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LocationServices, InvoiceServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
