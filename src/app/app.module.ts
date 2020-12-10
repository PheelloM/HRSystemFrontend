import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { DeclarationComponent } from './declaration/declaration.component';
import { DetailsComponent } from './details/details.component';
//import { HomeComponent } from './Navigate/home.component';
import { FormDataService } from './data/formData.service';

@NgModule({
  declarations: [
    AppComponent,
    DeclarationComponent,
   // HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'details', component: DetailsComponent },
     // { path: 'home', component: HomeComponent },
      { path: 'declaration', component: DeclarationComponent},
      { path: '', redirectTo: '/details', pathMatch: 'full' },
    ])
  ],
  providers: [
  {provide: ApiService, useClass:ApiService},
  {provide: FormDataService,useClass: FormDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
