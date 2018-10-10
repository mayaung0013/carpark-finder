import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SearchPage } from '../pages/search/search';
//import { NearByPage } from '../pages/nearby/nearby';
import { SearchResultPage } from '../pages/searchresult/searchresult';
import { SearchResultDetailsModal } from '../pages/resultdetails/resultdetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SelectSearchableModule } from 'ionic-select-searchable';
import { AgmCoreModule } from '@agm/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
//import {Geolocation} from '@ionic-native/geolocation';
import { EmailComposer } from '@ionic-native/email-composer';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedbackPage,
    SearchPage,
    SearchResultPage,
    SearchResultDetailsModal
    //NearByPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCnahpwY4LRTYlzEHnER3B_Y8NR1HzmrVE",
      libraries: ["places"]
    }),
    SelectSearchableModule,
    NgxDatatableModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedbackPage,
    SearchPage,
    SearchResultPage,
    SearchResultDetailsModal
    //NearByPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LaunchNavigator,
    //Geolocation,
  ],
})
export class AppModule {}
