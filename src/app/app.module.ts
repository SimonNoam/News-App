import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http'
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews/businessnews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
 const appRouts : Routes = [
      {path: '', component:TopheadingComponent},
      {path: 'tech', component:TechnewsComponent},
      {path: 'business', component:BusinessnewsComponent}
 ] ;

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRouts),
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
