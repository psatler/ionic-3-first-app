import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { AboutPage } from '../pages/about2/about2';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';

import {HttpModule} from "@angular/http"
import { MovieProvider } from '../providers/movie/movie';

//import the newly pages modules
import {SettingsPageModule } from "../pages/settings/settings.module";
// import {AboutPageModule } from "../pages/about2/about2.module";
import { SobrePageModule } from "../pages/sobre/sobre.module"
import {ProfilePageModule } from "../pages/profile/profile.module";
import {MoviedetailsPageModule } from "../pages/moviedetails/moviedetails.module";

@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule,
    SettingsPageModule,
    // AboutPageModule,
    ProfilePageModule,
    SobrePageModule,
    MoviedetailsPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
