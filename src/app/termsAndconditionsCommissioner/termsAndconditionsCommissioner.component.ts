import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-termsAndconditionsCommissioner',
  templateUrl: './termsAndconditionsCommissioner.component.html',
  styleUrls: ['./termsAndconditionsCommissioner.component.scss']
})

export class TermsAndConditionsCommissionerComponent implements OnInit {
  termsAndconditionsCommissionerForm: FormGroup;
  isSubmitted = false;

  constructor(private _fb: FormBuilder, private _router: Router){}

  ngOnInit(): void {
      this.termsAndconditionsCommissionerForm = this._fb.group({
        defaultExampleRadios: ['', Validators.required],
        });
        }
        get termsAndconditionsCommissionerFormControl() {
              return this.termsAndconditionsCommissionerForm.controls;
        }

        get tacdefaultExampleRadios() {
                  return this.termsAndconditionsCommissionerForm.get('defaultExampleRadios');
        }

  submit(){
     this.isSubmitted = true;
             if(!this.termsAndconditionsCommissionerForm.valid) {
                alert("Enter Required Value");
                return false;
             }else {
                      if(this.termsAndconditionsCommissionerForm.value.defaultExampleRadios === "Disagree"){
                           this._router.navigate(['/home', this.termsAndconditionsCommissionerForm]);
                      }else{
                             this._router.navigate(['/detailsCommissioner', this.termsAndconditionsCommissionerForm]);
                           }
                   }
          }
}
