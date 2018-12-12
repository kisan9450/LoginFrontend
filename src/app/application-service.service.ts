import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IApplication } from './IApplication';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {
  constructor(private http: HttpClient) { }

  getApplications(id: Number): Observable<any> {
    return this.http.get("http://172.23.239.222:8094/appdetails?i="+id).pipe(
      catchError(this.errorHandler));
  }

  sampleApplication(interval:Number, application:IApplication): Observable<any> {
    return this.http.post("http://172.23.239.74:8084/api/v1/samplingserver?interval="+interval,application,httpOptions).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}
