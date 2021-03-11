import {Details, Declarations, Homes, DetailsCommissioner, AdditionalInfo, DeclarationCommissioner } from './../data/formData.model';
import { ApiService } from './../api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class FormDataService{

     private formDataDetail= new Details();
     private formDataDecl= new Declarations();
     private formDataHome= new Homes();
     private formDataDetailCommissioner = new DetailsCommissioner();
     private formDataAdditionalInfo = new AdditionalInfo();
     private formDataDeclarationCommissioner = new DeclarationCommissioner();

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

                setFormDataHome(obj :Homes){
                      this.formDataHome=obj;
                    }

                    getFormDataHome():Homes{
                      return this.formDataHome;
                    }

             setFormDataDetailCommissioner(obj :DetailsCommissioner){
                 this.formDataDetailCommissioner=obj;
             }

             getFormDataDetailCommissioner():DetailsCommissioner{
                return this.formDataDetailCommissioner;
             }

             setFormDataAdditionalInfo(obj :AdditionalInfo){
                this.formDataAdditionalInfo=obj;
             }

             getFormDataAdditionalInfo():AdditionalInfo{
                return this.formDataAdditionalInfo;
             }

             setFormDataDeclarationCommissioner(obj :DeclarationCommissioner){
                this.formDataDeclarationCommissioner=obj;
             }

             getFormDataDeclarationCommissioner():DeclarationCommissioner{
                return this.formDataDeclarationCommissioner;
             }
}
