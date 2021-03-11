import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  templateUrl: './termsAndconditions.component.html',
  styleUrls: ['./termsAndconditions.component.scss']
})

export class TermsAndConditionsComponent implements OnInit {
  termsAndconditionsForm: FormGroup;

  constructor(private _fb: FormBuilder, private _api: ApiService,private _router: Router){}

  ngOnInit(): void {
      this.termsAndconditionsForm = this._fb.group({
        defaultExampleRadios: ['', Validators.required],
        });
        }

  submit(){
     debugger;
     if(this.termsAndconditionsForm.value.defaultExampleRadios == "disagree"){
      this._router.navigate(['/details' /* home page*/, this.termsAndconditionsForm]);
     }
     this._router.navigate(['/details', this.termsAndconditionsForm]);
}
}
