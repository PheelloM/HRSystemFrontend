import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { DeclarationComponent } from './declaration/declaration.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { TermsAndConditionsComponent } from './termsAndconditions/termsAndconditions.component';
import { TermsAndConditionsCommissionerComponent } from './termsAndconditionsCommissioner/termsAndconditionsCommissioner.component';
import { DetailsCommissionerComponent } from './detailsCommissioner/detailsCommissioner.component';
import { AdditionalInfoCommissionerComponent } from './additionalInfo/additionalInfo.component';
import { DeclarationCommissionerComponent } from './declarationCommissioner/declarationCommissioner.component';
//import { HomeComponent } from './Navigate/home.component';
import { FormDataService } from './data/formData.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DeclarationComponent,
    DetailsComponent,
    DeclarationCommissionerComponent,
    AdditionalInfoCommissionerComponent,
    DetailsCommissionerComponent,
    TermsAndConditionsCommissionerComponent,
    TermsAndConditionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,

    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'details', component: DetailsComponent },

      { path: 'declaration', component: DeclarationComponent},
      { path: 'detailsCommissioner', component: DetailsCommissionerComponent},
      { path: 'additionalInfo', component: AdditionalInfoCommissionerComponent},
      { path: 'declarationCommissioner', component: DeclarationCommissionerComponent},

      { path: 'termsAndconditions', component: TermsAndConditionsComponent},

      { path: 'termsAndconditionsCommissioner', component: TermsAndConditionsCommissionerComponent},

      { path: '', redirectTo: '/home', pathMatch: 'full' },

    ]),

  ],
  providers: [
  {provide: ApiService, useClass:ApiService},
  {provide: FormDataService,useClass: FormDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
