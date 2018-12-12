import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AppregisterComponent } from './appregister/appregister.component';
import { FooterComponent } from './footer/footer.component';
import { WarinfoComponent } from './info/warinfo/warinfo.component';
import { JarinfoComponent } from './info/jarinfo/jarinfo.component';
import { DockerinfoComponent } from './info/dockerinfo/dockerinfo.component';
import { ViewAllApplicationsComponent } from './dashboard/view-all-applications/view-all-applications.component';
import { StaticComponent } from './real-time/front-end1/static/static.component';
import { DisplayComponent } from './real-time/front-end1/display/display.component';
import { ChartsModule } from 'ng2-charts';
import { AdventureTimeService } from './real-time/front-end1/services/adventure-time.service';

const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
 path: 'dashboard',
 component: DashboardComponent 
},
{ 
path: 'register',
component: RegisterComponent
 },
{path: 'appregister',
component: AppregisterComponent
},
{path: 'footer',
component: FooterComponent
},
{path: 'warinfo',
component: WarinfoComponent
},
{
path: 'jarinfo',
component: JarinfoComponent
},
{
path: 'dockerinfo',
component: DockerinfoComponent
},
{ path: 'YourApplications', component: ViewAllApplicationsComponent },
{ path: 'static/:userID/:appID', component: StaticComponent },
{ path: 'display/:userID/:appID', component: DisplayComponent }
];
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [AdventureTimeService]
})
export class AppRoutingModule { }
