import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import {Details, Declarations,MyData} from './../data/formData.model';


@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {

isSubmitted = false;
  declairationForm: FormGroup;
  public detailsForm : any;
   declObj: Declarations = new Declarations();
   formdataObj:MyData;


 data: any;

  constructor(private _fb: FormBuilder, private _api: ApiService, private route: ActivatedRoute,
  private router: Router, public service:FormDataService){
    this.formdataObj=new MyData();
  }

  ngOnInit(): void {

    this.declairationForm = this._fb.group({
     // screening: ['disagree'],
      question1: ['', Validators.required],
      q1Comment: [''],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      Q3Comment: [''],
      question4: ['', Validators.required],
      question5: ['', Validators.required],
      question6: ['', Validators.required],
      question7: ['', Validators.required],
      question8: ['', Validators.required],
      question9: ['', Validators.required],
      question10: ['', Validators.required],
      question11: ['', Validators.required],
      question12: ['', Validators.required],
      question13: ['', Validators.required],
      question14: ['', Validators.required],
      question15: ['', Validators.required],
      question16: ['', Validators.required],
      question17: ['', Validators.required],
    });
  }

  get declairationFormControl() {
      return this.declairationForm.controls;
    }

    get declairationFormQ1() {
          return this.declairationForm.get('question1');
        }
    get declairationFormQ2() {
              return this.declairationForm.get('question2');
            }
    /*get declairationFormq1Comment() {
                  return this.declairationForm.get('q1Comment');
                }*/


  submit(){
    debugger;

    this.isSubmitted = true;
        if(!this.declairationForm.valid) {
        alert("Enter Required Value(s)")
          return false;
        } else {
            alert("Successful Test")
          }

   // validateAnswers();
   this.declObj.question1=this.declairationForm.value.question1;
   this.declObj.question2=this.declairationForm.value.question2;
   this.declObj.question3=this.declairationForm.value.question3;
   this.declObj.question4=this.declairationForm.value.question4;
   this.declObj.question5=this.declairationForm.value.question5;
   this.declObj.question6=this.declairationForm.value.question6;
   this.declObj.question7=this.declairationForm.value.question7;
   this.declObj.question8=this.declairationForm.value.question8;
   this.declObj.question9=this.declairationForm.value.question9;
   this.declObj.question10=this.declairationForm.value.question10;
   this.declObj.question11=this.declairationForm.value.question11;
   this.declObj.question12=this.declairationForm.value.question12;
   this.declObj.question13=this.declairationForm.value.question13;
   this.declObj.question14=this.declairationForm.value.question14;
   this.declObj.question15=this.declairationForm.value.question15;
   this.declObj.question16=this.declairationForm.value.question16;
   this.declObj.question17=this.declairationForm.value.question17;

   this.formdataObj.declarations=this.declObj;
   this.service.setFormDataDecl(this.formdataObj.declarations);

   console.log('Object Details: '+ this.service.getFormDataDetail());
    console.log('Object Declaration: '+this.declObj);
    console.log(JSON.stringify(this.service.getFormDataHome()));
     console.log(JSON.stringify(this.service.getFormDataDetail()));
      console.log(JSON.stringify(this.declObj));



       //     this._api.saveDeclaration(this.declairationForm.value)
              //this._api.saveDeclaration(JSON.stringify(this.declObj,JSON.stringify(this.service.getFormDataDetail())
       //         .subscribe(x => {
       //           debugger;
       //           this.router.navigate(['/declaration', this.declairationForm]);
       //         }, e => {
        //          debugger;
        //        })


      /*if(!this.declObj.question1 || !this.declObj.question2 || !this.declObj.question3
          || !this.declObj.question4 || !this.declObj.question5 || !this.declObj.question6
          || !this.declObj.question7 || !this.declObj.question8 || !this.declObj.question9
          || !this.declObj.question10 || !this.declObj.question11 || !this.declObj.question12
          || !this.declObj.question13 || !this.declObj.question14 || !this.declObj.question15
          || !this.declObj.question16 || !this.declObj.question17){
            return ;
          } else{
          this._api.saveDeclaration(this.declairationForm.value)
              //this._api.saveDeclaration(JSON.stringify(this.declObj,JSON.stringify(this.service.getFormDataDetail())
                .subscribe(x => {
                  debugger;
                }, e => {
                  debugger;
                })
          this.router.navigate(['/declaration', this.declairationForm]);
          */
         // }
   /* this._api.saveDeclaration(this.declairationForm.value)
    //this._api.saveDeclaration(JSON.stringify(this.declObj,JSON.stringify(this.service.getFormDataDetail())
      .subscribe(x => {
        debugger;
      }, e => {
        debugger;
      })*/
  }
}
