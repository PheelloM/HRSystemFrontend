import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import {FormDataService} from './../data/formData.service';
import { Location } from '@angular/common';
import { ApiService } from './../api.service';
import {Details, Declarations, Homes, MyData} from './../data/formData.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

homeForm: FormGroup;
closeResult: String;
formdataObj:MyData;
 homeObj: Homes = new Homes();

  constructor(private _fb: FormBuilder, private _api: ApiService,private _router: Router
  ,public service:FormDataService, private modalService: NgbModal){
    this.formdataObj=new MyData();

  }

  ngOnInit(): void {
      this.homeForm = this._fb.group({
            referencenumber: ['0122/2020'],
            referencenumberCommissioner: ['0122/202010'],
           // referencenumber: new FormControl(refnumber.value)

          });
      }

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-java-title'}).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
    }

    openCommissioner(contentCommissioner) {
          this.modalService.open(contentCommissioner, {ariaLabelledBy: 'modal-commissioner-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
    }



    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

  submit(){

    //this._router.navigate(['/details', this.homeForm]);

  }

  onSubmit(f: NgForm) {
    this.homeObj.referencenumber=this.homeForm.value.referencenumber;
    console.log(this.homeObj.referencenumber);
    this.formdataObj.homes=this.homeObj;
    this.service.setFormDataHome(this.formdataObj.homes);
    //console.log(f.value.refnumber);

    //console.log(this.homeForm.value.referencenumber);
    this._router.navigate(['/termsAndconditions', this.homeForm]);
  }

  onCommissionerSubmit(a: NgForm) {
      this.homeObj.referencenumber=this.homeForm.value.referencenumber;
      console.log(this.homeObj.referencenumber);
      this.formdataObj.homes=this.homeObj;
      this.service.setFormDataHome(this.formdataObj.homes);
      //console.log(f.value.refnumber);

      //console.log(this.homeForm.value.referencenumber);
      this._router.navigate(['/termsAndconditionsCommissioner', this.homeForm]);
    }
}
