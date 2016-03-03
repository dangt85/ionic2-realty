import {App, IonicApp, Platform} from 'ionic-angular';
import {WelcomePage} from './pages/welcome/welcome';
import {PropertyListPage} from './pages/property-list/property-list';
import {BrokerListPage} from './pages/broker-list/broker-list';
import {FavoriteListPage} from './pages/favorite-list/favorite-list';
import {PropertyService} from './services/property-service';
import {BrokerService} from './services/broker-service';

@App({
  templateUrl: 'build/app.html',
  config: {
    mode: 'md'
  }, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [PropertyService, BrokerService]
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform]];
  }

  constructor(app, platform) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      {title: 'Welcome', component: WelcomePage, icon: "bookmark"},
      {title: 'Properties', component: PropertyListPage},
      {title: 'Brokers', component: BrokerListPage},
      {title: 'Favorites', component: FavoriteListPage}
    ];

    // make WelcomePage the root (or first) page
    this.rootPage = WelcomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (window.StatusBar) {
        window.StatusBar.styleDefault();
      }
    });
  }

  openPage(page) {
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
