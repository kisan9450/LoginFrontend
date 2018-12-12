import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewAllApplicationsComponent } from './view-all-applications/view-all-applications.component';
import { LiveDataComponent } from './live-data/live-data.component';
import { StaticDataComponent } from './static-data/static-data.component';
import { ApplicationCardComponent } from './application-card/application-card.component';
import { ModalsModule } from '../modals/modals.module';
import { MyDialogComponent } from '../modals/my-dialog/my-dialog.component';
import { MyDialog1Component } from '../modals/my-dialog1/my-dialog1.component';
import { MyDialog2Component } from '../modals/my-dialog2/my-dialog2.component';

@NgModule({
  imports: [
    CommonModule,ModalsModule],
  declarations: [
    DashboardComponent,
    MyDialogComponent,
    MyDialog1Component,
    MyDialog2Component,
    ViewAllApplicationsComponent,
    LiveDataComponent,
    StaticDataComponent,
    ApplicationCardComponent
  ]
})
export class DashboardModule { }
