import { HealthModel } from './../health-data/health.model';
import { HttpClient } from '@angular/common/http';
import { ThreadDataModel } from './../thread-data/thread-data.model';

import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import { CHARACTERS } from './data1';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AdventureTimeService {

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { 
    }


  private _url : string = "http://172.23.239.74:8188/api/v1/metrics/";
  data : any = {};
  health : HealthModel;
  getDetails(metricsName:string,userID:Number,applicationID:Number){
    console.log("check");
    console.log(this._url+metricsName+"?userID="+userID+"&applicationID="+applicationID);
    console.log("raed"+this.http.get<any>(this._url+metricsName+"?userID="+userID+"&applicationID="+applicationID));
      return this.http.get<any>(this._url+metricsName+"?userID="+applicationID+"&applicationID="+userID);
  }



}