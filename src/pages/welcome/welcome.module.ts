import { LoginPageModule } from './../login/login.module';
import { SignupPageModule } from './../signup/signup.module';
import { SignupPage } from './../signup/signup';

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { WelcomePage } from './welcome';
import { LoginPage } from '../login/login';


@NgModule({
  declarations: [
    WelcomePage
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
    TranslateModule.forChild(),
    LoginPageModule,
    SignupPageModule
  ],
  entryComponents: [
    WelcomePage
  ],
  exports: [
    WelcomePage
  ]
})
export class WelcomePageModule { }
