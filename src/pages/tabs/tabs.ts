import { Component } from '@angular/core';

// import { AboutPage } from '../about2/about2';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { FeedPage } from '../feed/feed'

import {SettingsPage} from "../settings/settings"

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
