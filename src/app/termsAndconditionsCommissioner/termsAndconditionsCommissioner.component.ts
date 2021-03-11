import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-termsAndconditions',
  templateUrl: './termsAndconditions.component.html',
  styleUrls: ['./termsAndconditions.component.scss']
})

export class TermsAndConditionsComponent implements OnInit {
  termsAndconditionsForm: FormGroup;
  isSubmitted = false;

  constructor(private _fb: FormBuilder, private _router: Router){}

  ngOnInit(): void {
      this.termsAndconditionsForm = this._fb.group({
        defaultExampleRadios: ['', Validators.required],
        });
        }
        get termsAndconditionsFormControl() {
              return this.termsAndconditionsForm.controls;
        }

        get tacdefaultExampleRadios() {
                  return this.termsAndconditionsForm.get('defaultExampleRadios');
        }

  submit(){
     debugger;
     this.isSubmitted = true;
             if(!this.termsAndconditionsForm.valid) {
                alert("Enter Required Value");
                return false;
             }else {
                      if(this.termsAndconditionsForm.value.defaultExampleRadios === "Disagree"){
                           this._router.navigate(['/home', this.termsAndconditionsForm]);
                      }else{
                             this._router.navigate(['/details', this.termsAndconditionsForm]);
                           }
                   }
          }
}
