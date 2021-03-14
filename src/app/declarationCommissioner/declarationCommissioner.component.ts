import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import {Details, Declarations, Homes, MyData, DetailsCommissioner, AdditionalInfo, DeclarationCommissioner } from './../data/formData.model';


@Component({
  selector: 'app-declarationCommissioner',
  templateUrl: './declarationCommissioner.component.html',
  styleUrls: ['./declarationCommissioner.component.scss']
})
export class DeclarationCommissionerComponent implements OnInit {

isSubmitted = false;
  declairationCommissionerForm: FormGroup;
   declObj: DeclarationCommissioner = new DeclarationCommissioner();
   formdataDeclObj:MyData;

  constructor(private _fb: FormBuilder, private _api: ApiService, private route: ActivatedRoute,
  private router: Router, public service:FormDataService){
    this.formdataDeclObj=new MyData();
  }

  ngOnInit(): void {

    this.declairationCommissionerForm = this._fb.group({
     // screening: ['disagree'],
      q1Radio: ['', Validators.required],
      q1SARSNumberTxtBox: ['',Validators.required],
      q2Radio: ['', Validators.required],
      q3Radio: ['', Validators.required],
      q4Radio: ['', Validators.required],
      q5Radio: ['', Validators.required],
      q6Radio: ['', Validators.required],
      q7Radio: ['', Validators.required],
      q8Radio: ['', Validators.required],
      q9Radio: ['', Validators.required],
      q10Radio: ['', Validators.required],
      q9CommentTxtBox: [''],
      q10CommentTxtBox: [''],
    });
  }

  get declairationCommissionerFormControl() {
      return this.declairationCommissionerForm.controls;
    }

    get declairationFormQ1() {
          return this.declairationCommissionerForm.get('q1Radio');
        }
    get declairationFormQ2() {
              return this.declairationCommissionerForm.get('q2Radio');
            }



  submit(){

    this.isSubmitted = true;
        if(!this.declairationCommissionerForm.valid) {
        alert("Enter Required Value(s)")
          return false;
        } else {
            alert("Successful Test")
          }

  //this.router.navigate(['/home', this.declairationCommissionerForm]);

   this.declObj.q1Radio=this.declairationCommissionerForm.value.q1Radio;
   this.declObj.q1SARSNumberTxtBox=this.declairationCommissionerForm.value.q1SARSNumberTxtBox;
   this.declObj.q2Radio=this.declairationCommissionerForm.value.q2Radio;
   this.declObj.q3Radio=this.declairationCommissionerForm.value.q3Radio;
   this.declObj.q4Radio=this.declairationCommissionerForm.value.q4Radio;
   this.declObj.q5Radio=this.declairationCommissionerForm.value.q5Radio;
   this.declObj.q6Radio=this.declairationCommissionerForm.value.q6Radio;
   this.declObj.q7Radio=this.declairationCommissionerForm.value.q7Radio;
   this.declObj.q8Radio=this.declairationCommissionerForm.value.q8Radio;
   this.declObj.q9Radio=this.declairationCommissionerForm.value.q9Radio;
   this.declObj.q9CommentTxtBox=this.declairationCommissionerForm.value.q9CommentTxtBox;
   this.declObj.q10Radio=this.declairationCommissionerForm.value.q10Radio;
   this.declObj.q10CommentTxtBox=this.declairationCommissionerForm.value.q10CommentTxtBox;

   this.formdataDeclObj.declarationCommissioner=this.declObj;
   this.service.setFormDataDeclarationCommissioner(this.formdataDeclObj.declarationCommissioner);

    console.log(JSON.stringify(this.service.getFormDataHome()));
    console.log(JSON.stringify(this.service.getFormDataDetailCommissioner()));
    console.log(JSON.stringify(this.service.getFormDataAdditionalInfo()));
    console.log(JSON.stringify(this.service.getFormDataDeclarationCommissioner()));

    this.router.navigate(['/home', this.declairationCommissionerForm]);

  }
}
