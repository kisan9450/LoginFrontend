import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { IApplication } from '../../IApplication';
import { ApplicationServiceService } from '../../application-service.service';
import { TokenStorageService } from '../../login/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.css']
})
export class ApplicationCardComponent implements OnInit {

  constructor(private _applicationService: ApplicationServiceService,
              private tokenstorageservice: TokenStorageService,
              private _router:Router) { 
  }
  ngOnInit() {
  }
  @Input() application:IApplication;
  response: String;
  // userID=Number(this.tokenstorageservice.getUid());
  movieExists;

  over:String;

  sample(samplingPeriod){
    this.over="Your Application is Sampling....";
    this._applicationService.sampleApplication(samplingPeriod,this.application)
    .subscribe(data=>this.over=data, error => this.response = "error");
  //  location.reload();
  }
  staticData(){
    this._router.navigate(['../static',this.application.userId,this.application.id]);
  }
  monitor(){
    this._router.navigate(['../display',this.application.userId,this.application.id]);
  }
}