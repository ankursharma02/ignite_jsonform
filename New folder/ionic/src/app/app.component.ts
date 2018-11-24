import { Component, ViewChild, ErrorHandler } from '@angular/core';
import { Nav, Platform, TapClick } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RequistionsPage } from '../pages/requistions/requistions';
import { TicketsPage } from '../pages/tickets/tickets';
import { ELogPage } from '../pages/e-log/e-log';

import { CollaborationPage } from '../pages/collaboration/collaboration';
import { MenualsPage } from '../pages/menuals/menuals';
import { SignupsPage } from '../pages/signups/signups';
import { BasicPage } from '../pages/tickethandle/tickethandle';
import { SettingdemoPage } from '../pages/settingdemo/settingdemo';
import { MapdemoPage } from '../pages/mapdemo/mapdemo';
import { JsonpropdemoPage } from '../pages/jsonpropdemo/jsonpropdemo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  t:any="Home page";
  pages: Array<{title: string,icon:string, component: any}>;
  pages1: Array<{title: string,icon:string, component: any}>;
  t1:any="ankur";
 
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Requistions', icon:'albums',component: RequistionsPage },
      { title: 'Tickets',icon:'albums', component: TicketsPage },
      { title: 'E-log',  icon:'list-box', component: ELogPage },
      {title:'Map',  icon:'list-box',component:MapdemoPage},
      {title:'Collaboration',  icon:'list-box',component:CollaborationPage},
      {title:'load',icon:'contact',component:BasicPage}
    ];
    this.pages1=[
      {title:'Settings', icon:'settings',component:SettingdemoPage},
      {title:'manual', icon:'person',component:MenualsPage},
      {title:'Sign out',icon:'person',component:SignupsPage},
      {title:'json demo',icon:'ios-photos-outline',component:JsonpropdemoPage}
    ];
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
  
    });
    
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.t=page.title;
  }
}
