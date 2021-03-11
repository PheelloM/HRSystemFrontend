import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import {FormDataService} from './../data/formData.service';
import { Location } from '@angular/common';
import { ApiService } from './../api.service';
import {Details, Declarations, Homes, MyData, DetailsCommissioner, AdditionalInfo } from './../data/formData.model';

@Component({
  selector: 'app-additionalInfo',
  templateUrl: './additionalInfo.component.html',
  styleUrls: ['./additionalInfo.component.scss']
})
export class AdditionalInfoCommissionerComponent implements OnInit {

formdataObject:MyData;
  additionalInfoForm: FormGroup;
 addInfoObj: AdditionalInfo = new AdditionalInfo();

  constructor(private _fb: FormBuilder, private _api: ApiService,private _router: Router
  ,public service:FormDataService){
  this.formdataObject=new MyData();
  }

  ngOnInit(): void {

    this.additionalInfoForm = this._fb.group({
      jobTitle: ['', Validators.required],

      external_Applicant: ['', Validators.required],
      fulltimeRadios: [''],
      defaultExampleRadiosfull_time: [''],
      commissionerRadios2: [''],
      exist: [''],
      province: [''],
      region: [''],
      currentPosition: [''],
     // region: [''],
      mediation_and_ARBITRATION_Experience: ['', Validators.required],
      industrial_RELATION_Experience: ['', Validators.required],
      facilitation_TRAINING_Experience: ['', Validators.required],
      management_LEADERSHIP_Experience: ['', Validators.required],
      bargaining_Experience: ['', Validators.required],
      name_of_bargaining: ['', Validators.required],
      })

}

  get additionalInfoFormControl() {
    return this.additionalInfoForm.controls;
  }

  submit(){
    debugger;


        this.addInfoObj.jobTitle=this.additionalInfoForm.value.jobTitle;
        this.addInfoObj.external_Applicant=this.additionalInfoForm.value.external_Applicant;
        this.addInfoObj.fulltimeRadios=this.additionalInfoForm.value.fulltimeRadios;
        this.addInfoObj.defaultExampleRadiosfull_time=this.additionalInfoForm.value.defaultExampleRadiosfull_time;
        this.addInfoObj.commissionerRadios2=this.additionalInfoForm.value.commissionerRadios2;
        this.addInfoObj.mediation_and_ARBITRATION_Experience=this.additionalInfoForm.value.mediation_and_ARBITRATION_Experience;
        this.addInfoObj.industrial_RELATION_Experience=this.additionalInfoForm.value.industrial_RELATION_Experience;
        this.addInfoObj.facilitation_TRAINING_Experience=this.additionalInfoForm.value.facilitation_TRAINING_Experience;
        this.addInfoObj.management_LEADERSHIP_Experience=this.additionalInfoForm.value.management_LEADERSHIP_Experience;
        this.addInfoObj.bargaining_Experience=this.additionalInfoForm.value.bargaining_Experience;
        this.addInfoObj.name_of_bargaining=this.additionalInfoForm.value.name_of_bargaining;

        this.formdataObject.additionalInfo=this.addInfoObj;
        this.service.setFormDataAdditionalInfo(this.formdataObject.additionalInfo);

        console.log(JSON.stringify(this.service.getFormDataHome()));
        console.log(JSON.stringify(this.service.getFormDataDetailCommissioner()));
         console.log(JSON.stringify(this.service.getFormDataAdditionalInfo()));

        console.log('service');

        if(!this.addInfoObj.jobTitle || !this.addInfoObj.external_Applicant || !this.addInfoObj.mediation_and_ARBITRATION_Experience
        || !this.addInfoObj.industrial_RELATION_Experience || !this.addInfoObj.facilitation_TRAINING_Experience || !this.addInfoObj.management_LEADERSHIP_Experience
        || !this.addInfoObj.bargaining_Experience || !this.addInfoObj.name_of_bargaining){
          return ;
        } else{
        this._router.navigate(['/declarationCommissioner', this.additionalInfoForm]);

        }

   // console.log('service');

 // this._router.navigate(['/declarationCommissioner', this.additionalInfoForm]);
  }
}
