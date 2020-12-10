import {Details, Declarations, /*Home*/} from './../data/formData.model';
import { ApiService } from './../api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class FormDataService{

     private formDataDetail= new Details();
     private formDataDecl= new Declarations();
     //private formDataHome= new Home();

    setFormDataDetail(obj :Details){
      this.formDataDetail=obj;
    }

    getFormDataDetail():Details{
      return this.formDataDetail;
    }


            setFormDataDecl(obj :Declarations){
                  this.formDataDecl=obj;
                }

                getFormDataDecl():Declarations{
                  return this.formDataDecl;
                }

               /* setFormDataHome(obj :Home){
                      this.formDataHome=obj;
                    }

                    getFormDataHome():Home{
                      return this.formDataHome;
                    }*/
}
