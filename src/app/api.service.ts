import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    constructor(private _http: HttpClient){}

    savePersonalDetails(value){
        return this._http.post('http://localhost:8080/details', value);
    }

    saveDeclaration(value){
        return this._http.post('http://localhost:8080/declaration', value/*,val2*/);
    }
}
