import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingdemoPage } from './settingdemo';

@NgModule({
  declarations: [
    SettingdemoPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingdemoPage),
  ],
})
export class SettingdemoPageModule {}
