import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import {FormDataService} from './../data/formData.service';
import { Location } from '@angular/common';
import { ApiService } from './../api.service';
import {Details, Declarations, Homes, MyData} from './../data/formData.model';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

formdataObj:MyData;
  detailsForm: FormGroup;
 detailsObj: Details = new Details();
  constructor(private _fb: FormBuilder, private _api: ApiService,private _router: Router
  ,public service:FormDataService){
  this.formdataObj=new MyData();
  }

  ngOnInit(): void {

    this.detailsForm = this._fb.group({
      title: ['', Validators.required],

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      race: ['', Validators.required],
      isSouthAfrican: ['true'],
      idNumber: ['', [Validators.minLength(13), Validators.maxLength(13)]],
      passportNumber: [''],
      countryOfIssue: [''],
      expiryDate: [''],
      workPermit: ['false'],
      workPermitDetails: [''],

      disability: ['false', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      altContactNumber: [''],
      resAddress: ['', Validators.required],
      postAddress: ['', Validators.required],
      highestGradePassed: ['', Validators.required],
      qualifications: new FormArray([
        new FormGroup({
          qualification: new FormControl(''),
          institution: new FormControl(''),
          year: new FormControl('')
        })
      ]),
      workexperiences: new FormArray([
              new FormGroup({
                nameofemployer: new FormControl(''),
                jobtitle: new FormControl(''),
                datestarted: new FormControl(''),
                dateended: new FormControl(''),
                reasonforleaving: new FormControl('')
              })
            ]),
      workExperience: ['', Validators.required],
      profBodies: new FormArray([
        new FormGroup({
          institution: new FormControl(''),
          current: new FormControl('false')
        })
      ]),
      // resume: [''],
      // fileSource: ['']
    })
  }

  get qualifications() {
    return this.detailsForm.get('qualifications') as FormArray
  }

  get workexperiences() {
      return this.detailsForm.get('workexperiences') as FormArray
    }

  get profBodies(){
    return this.detailsForm.get('profBodies') as FormArray
  }

  get detailsFormControl() {
    return this.detailsForm.controls;
  }

  addQualification(){
    const control = new FormGroup({
      qualification: new FormControl(''),
      institution: new FormControl(''),
      year: new FormControl('')
    })
    this.qualifications.push(control);
  }

  removeQualification(index){
    debugger;
    this.qualifications.removeAt(index);
  }

  addWorkExperience(){
      const control = new FormGroup({
        nameofemployer: new FormControl(''),
        jobtitle: new FormControl(''),
        datestarted: new FormControl(''),
        dateended: new FormControl(''),
        reasonforleaving: new FormControl('')
      })
      this.workexperiences.push(control);
    }

    removeWorkExperience(index){
      debugger;
      this.workexperiences.removeAt(index);
    }

  addProfesionalBodies(){
    const control = new FormGroup({
      institution: new FormControl(''),
      current: new FormControl('false')
    });
    this.profBodies.push(control);
  }

  removeProfesionalBody(index){
    this.profBodies.removeAt(index);
  }
  get f() { return this.detailsForm.controls; }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.detailsForm.patchValue({
        fileSource: file
      });
    }
  }

  submit(){
    debugger;

//this.detailsObj.gender='gfh';
    console.log(this.detailsForm.value.firstName);
    this.detailsObj.title=this.detailsForm.value.title;
    this.detailsObj.firstName=this.detailsForm.value.firstName;
    this.detailsObj.lastName=this.detailsForm.value.lastName;
    this.detailsObj.gender=this.detailsForm.value.gender;
    this.detailsObj.race=this.detailsForm.value.race;
    this.detailsObj.isSouthAfrican=this.detailsForm.value.isSouthAfrican;
    this.detailsObj.idNumber=this.detailsForm.value.idNumber;
    this.detailsObj.disability=this.detailsForm.value.disability;
    this.detailsObj.email=this.detailsForm.value.email;
    this.detailsObj.contactNumber=this.detailsForm.value.contactNumber;
    this.detailsObj.resAddress=this.detailsForm.value.resAddress;
    this.detailsObj.highestGradePassed=this.detailsForm.value.highestGradePassed;
    this.detailsObj.workExperience=this.detailsForm.value.workExperience;
    this.formdataObj.details=this.detailsObj;
    this.service.setFormDataDetail(this.formdataObj.details);

    console.log(JSON.stringify(this.service.getFormDataHome()));

    console.log('service');
  //this._router.navigate(['/declaration', this.detailsForm]);
    if(!this.detailsObj.firstName || !this.detailsObj.title || !this.detailsObj.lastName
    || !this.detailsObj.gender || !this.detailsObj.race || !this.detailsObj.isSouthAfrican
    || !this.detailsObj.email || !this.detailsObj.contactNumber || !this.detailsObj.resAddress
    || !this.detailsObj.highestGradePassed){
      return ;
    } else{
    this._router.navigate(['/declaration', this.detailsForm]);

    }

  }
}
