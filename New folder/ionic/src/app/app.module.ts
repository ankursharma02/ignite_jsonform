import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RequistionsPage } from '../pages/requistions/requistions';
import { TicketsPage } from '../pages/tickets/tickets';
import { ELogPage } from '../pages/e-log/e-log';

import { CollaborationPage } from '../pages/collaboration/collaboration';
import { MenualsPage } from '../pages/menuals/menuals';
import { SignupsPage } from '../pages/signups/signups';
import { Loadtab1Page } from '../pages/loadtab1/loadtab1';
import { RequistionsFormPage } from '../pages/requistions-form/requistions-form';
import { TickethandlePage, BasicPage } from '../pages/tickethandle/tickethandle';
import { Unloadtab2Page } from '../pages/unloadtab2/unloadtab2';
import { SettingdemoPage } from '../pages/settingdemo/settingdemo';
import { MapdemoPage } from '../pages/mapdemo/mapdemo';
import { JsonpropdemoPage } from '../pages/jsonpropdemo/jsonpropdemo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RequistionsPage,
    TicketsPage,
    ELogPage,
    MapdemoPage,
    CollaborationPage,
    SettingdemoPage,
    MenualsPage,
    SignupsPage,
    Loadtab1Page,
    RequistionsFormPage,
    TickethandlePage,
    Unloadtab2Page,
    BasicPage,
    JsonpropdemoPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      pageTransition: 'md-transition'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RequistionsPage,
    TicketsPage,
    ELogPage,
    MapdemoPage,
    CollaborationPage,
    SettingdemoPage,
    MenualsPage,
    SignupsPage,
    Loadtab1Page,
    RequistionsFormPage,
    TickethandlePage,
    Unloadtab2Page,
    BasicPage,
    JsonpropdemoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
