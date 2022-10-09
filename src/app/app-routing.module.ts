import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { EditComponent } from './location/edit/edit.component';
import { LocationComponent } from './location/location.component';
import { ToursComponent } from './tours/tours.component';

const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'Tours', component: ToursComponent },
  { path: 'Location', component: LocationComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'Edit', component: EditComponent },
  { path: 'Edit/:id', component: EditComponent },
  { path: 'Invoice', component: InvoiceComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },

  // {path: '**' , component : Error}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
