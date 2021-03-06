import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login/login.module';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AppregisterComponent } from './appregister/appregister.component';
import { FooterComponent } from './footer/footer.component';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WarinfoComponent } from './info/warinfo/warinfo.component';
import { JarinfoComponent } from './info/jarinfo/jarinfo.component';
import { DockerinfoComponent } from './info/dockerinfo/dockerinfo.component';
import { HeaderComponent } from './header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ViewAllApplicationsComponent } from './dashboard/view-all-applications/view-all-applications.component';
import { LiveDataComponent } from './dashboard/live-data/live-data.component';
import { StaticDataComponent } from './dashboard/static-data/static-data.component';
import { ApplicationCardComponent } from './dashboard/application-card/application-card.component';
import { BarChartComponent } from './real-time/front-end1/bar-chart/bar-chart.component';
import { ThreadListComponent } from './real-time/front-end1/thread-list/thread-list.component';
import { HealthMetricComponent } from './real-time/front-end1/health-metric/health-metric.component';
import { CpuMetricComponent } from './real-time/front-end1/cpu-metric/cpu-metric.component';
import { CpuUsageComponent } from './real-time/front-end1/cpu-usage/cpu-usage.component';
import { CpuCoresComponent } from './real-time/front-end1/cpu-cores/cpu-cores.component';
import { RamComponent } from './real-time/front-end1/ram/ram.component';
import { HttpComponent } from './real-time/front-end1/http/http.component';
import { NetworkComponent } from './real-time/front-end1/network/network.component';
import { routingComponent, DisplayRoutingModule } from './real-time/front-end1/display/display.module';
import { StaticComponent } from './real-time/front-end1/static/static.component';
import { DisplayComponent } from './real-time/front-end1/display/display.component';
import { ChartsModule } from 'ng2-charts';
import { AdventureTimeService } from './real-time/front-end1/services/adventure-time.service';
import { ModalsModule } from './modals/modals.module';
import { MyDialogComponent } from './modals/my-dialog/my-dialog.component';
import { MyDialog1Component } from './modals/my-dialog1/my-dialog1.component';
import { MyDialog2Component } from './modals/my-dialog2/my-dialog2.component';
import { MyDialog3Component } from './modals/my-dialog3/my-dialog3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    AppregisterComponent,
    FooterComponent,
    MyDialogComponent,
    MyDialog1Component,
    MyDialog2Component,
    MyDialog3Component,
    WarinfoComponent,
    JarinfoComponent,
    DockerinfoComponent,
    HeaderComponent,
    ViewAllApplicationsComponent,
    LiveDataComponent,
    StaticDataComponent,
    ApplicationCardComponent,
    BarChartComponent,
    ThreadListComponent,
    HealthMetricComponent,
    CpuMetricComponent,
    CpuUsageComponent,
    CpuCoresComponent,
    RamComponent,
    HttpComponent,
    NetworkComponent,
    routingComponent,
    StaticComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ChartsModule,
    AppRoutingModule,
    DisplayRoutingModule,
    ReactiveFormsModule,
    ModalsModule
  ],
  entryComponents: [MyDialogComponent,MyDialog1Component,MyDialog2Component, MyDialog3Component,],
  providers: [AdventureTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
