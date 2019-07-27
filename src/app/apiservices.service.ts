import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  APIurl="http://127.0.0.1:8000"

  constructor(
    private http:HttpClient
  ) { 

  }


  getPasientes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.APIurl+'/api/v1/paciente/', httpOptions);
  }
}
