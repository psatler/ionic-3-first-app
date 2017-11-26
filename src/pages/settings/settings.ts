import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from "../profile/profile"
import { SobrePage } from "../sobre/sobre"

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  rootPage = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //functions to navigate menus
  openProfile(){
    this.navCtrl.push(ProfilePage);
  }

  openAbout(){
    this.navCtrl.push(SobrePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
