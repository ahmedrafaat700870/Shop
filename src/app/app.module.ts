import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { PageBodyComponent } from './body/page-body/page-body.component';
import { FooterComponent } from './body/footer/footer.component';
import { PageSidebarComponent } from './body/page-sidebar/page-sidebar.component';
import { ListComponent } from './list/list.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PageBodyComponent,
    PageSidebarComponent,
    FooterComponent,
    ListComponent,
    AddCategoriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
