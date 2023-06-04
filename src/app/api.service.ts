import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {}
  public getProducts(): Observable<any>{
    return this.http.get(`${environment.SERVER_URL}/products.json`);
  }
}
