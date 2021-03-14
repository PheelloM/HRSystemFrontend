import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import {FormDataService} from './../data/formData.service';
import { Location } from '@angular/common';
import { ApiService } from './../api.service';
import {Details, Declarations, Homes, MyData, DetailsCommissioner } from './../data/formData.model';

@Component({
  templateUrl: './detailsCommissioner.component.html',
  styleUrls: ['./detailsCommissioner.component.scss']
})
export class DetailsCommissionerComponent implements OnInit {

formdataObj:MyData;
  detailsCommissionerForm: FormGroup;
 detailCommissionerObj: DetailsCommissioner = new DetailsCommissioner();

  constructor(private _fb: FormBuilder, private _api: ApiService,private _router: Router
  ,public service:FormDataService){
  this.formdataObj=new MyData();
  }

  ngOnInit(): void {

    this.detailsCommissionerForm = this._fb.group({
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

      firstPref: [''],
      secondPref: [''],
      thirdPref: [''],
      forthPref: [''],

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
      trainingCourse: new FormArray([
              new FormGroup({
                provider: new FormControl(''),
                courseCompleted: new FormControl(''),
                yearCompleted: new FormControl('')
              })
            ]),
      reference: new FormArray([
             new FormGroup({
               nameOfPerson: new FormControl(''),
               mobileNumber: new FormControl(''),
               companyAndPosition: new FormControl(''),
               relationshipToYou: new FormControl('')
             })
           ]),
      languageProficiency: new FormArray([
              new FormGroup({
                language: new FormControl(''),
                read: new FormControl(''),
                write: new FormControl(''),
                speak: new FormControl('')
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
    return this.detailsCommissionerForm.get('qualifications') as FormArray
  }

  get trainingCourse() {
      return this.detailsCommissionerForm.get('trainingCourse') as FormArray
    }

  get reference() {
      return this.detailsCommissionerForm.get('reference') as FormArray
    }

  get languageProficiency() {
      return this.detailsCommissionerForm.get('languageProficiency') as FormArray
    }

  get workexperiences() {
      return this.detailsCommissionerForm.get('workexperiences') as FormArray
    }

  get profBodies(){
    return this.detailsCommissionerForm.get('profBodies') as FormArray
  }

  get detailsFormControl() {
    return this.detailsCommissionerForm.controls;
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
    this.qualifications.removeAt(index);
  }

  addTrainingCourse(){
      const control = new FormGroup({
        provider: new FormControl(''),
        courseCompleted: new FormControl(''),
        yearCompleted: new FormControl('')
      })
      this.trainingCourse.push(control);
    }

    removeTrainingCourse(index){
      this.trainingCourse.removeAt(index);
    }

    addReference(){
          const control = new FormGroup({
            nameOfPerson: new FormControl(''),
            mobileNumber: new FormControl(''),
            companyAndPosition: new FormControl(''),
            relationshipToYou: new FormControl('')
          })
          this.reference.push(control);
        }

        removeReference(index){
          this.reference.removeAt(index);
        }

  addLanguageProficiency(){
      const control = new FormGroup({
        language: new FormControl(''),
        read: new FormControl(''),
        write: new FormControl(''),
        speak: new FormControl('')
      })
      this.languageProficiency.push(control);
    }

    removeLanguageProficiency(index){
      this.languageProficiency.removeAt(index);
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
  get f() { return this.detailsCommissionerForm.controls; }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.detailsCommissionerForm.patchValue({
        fileSource: file
      });
    }
  }

  submit(){
 // this._router.navigate(['/additionalInfo', this.detailsCommissionerForm]);
//this.detailsObj.gender='gfh';
   //console.log(this.detailsCommissionerForm.value.firstName);
    this.detailCommissionerObj.title=this.detailsCommissionerForm.value.title;
    this.detailCommissionerObj.firstName=this.detailsCommissionerForm.value.firstName;
    this.detailCommissionerObj.lastName=this.detailsCommissionerForm.value.lastName;
    this.detailCommissionerObj.gender=this.detailsCommissionerForm.value.gender;
    this.detailCommissionerObj.race=this.detailsCommissionerForm.value.race;
    this.detailCommissionerObj.isSouthAfrican=this.detailsCommissionerForm.value.isSouthAfrican;
    this.detailCommissionerObj.idNumber=this.detailsCommissionerForm.value.idNumber;
    this.detailCommissionerObj.disability=this.detailsCommissionerForm.value.disability;
    this.detailCommissionerObj.email=this.detailsCommissionerForm.value.email;
    this.detailCommissionerObj.contactNumber=this.detailsCommissionerForm.value.contactNumber;
    this.detailCommissionerObj.resAddress=this.detailsCommissionerForm.value.resAddress;
    this.detailCommissionerObj.highestGradePassed=this.detailsCommissionerForm.value.highestGradePassed;
    this.detailCommissionerObj.workExperience=this.detailsCommissionerForm.value.workExperience;
    this.detailCommissionerObj.firstPref=this.detailsCommissionerForm.value.firstPref;
    this.detailCommissionerObj.secondPref=this.detailsCommissionerForm.value.secondPref;
    this.detailCommissionerObj.thirdPref=this.detailsCommissionerForm.value.thirdPref;
    this.detailCommissionerObj.forthPref=this.detailsCommissionerForm.value.forthPref;
    this.formdataObj.detailsCommissioner=this.detailCommissionerObj;
    this.service.setFormDataDetailCommissioner(this.formdataObj.detailsCommissioner);

    console.log(JSON.stringify(this.service.getFormDataHome()));
    console.log(JSON.stringify(this.service.getFormDataDetailCommissioner()));

    console.log('service');

    if(!this.detailCommissionerObj.firstName || !this.detailCommissionerObj.title || !this.detailCommissionerObj.lastName
    || !this.detailCommissionerObj.gender || !this.detailCommissionerObj.race || !this.detailCommissionerObj.isSouthAfrican
    || !this.detailCommissionerObj.email || !this.detailCommissionerObj.contactNumber || !this.detailCommissionerObj.resAddress
    || !this.detailCommissionerObj.highestGradePassed){
      return ;
    } else{
    this._router.navigate(['/additionalInfo', this.detailsCommissionerForm]);

    }

  }
}
