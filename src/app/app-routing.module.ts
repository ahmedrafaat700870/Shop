import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { PageBodyComponent } from './body/page-body/page-body.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'Home', component: PageBodyComponent },
  { path: 'List', component: ListComponent },
  { path: 'AddCategories', component: AddCategoriesComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  // {path: '**' , component : PageError}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
