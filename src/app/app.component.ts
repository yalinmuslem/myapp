import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DataMongodbPage } from '../pages/data-mongodb/data-mongodb'

@Component({
  templateUrl: 'app.html',
})

export class MyApp {
	@ViewChild('mycontent') nav
	
	public menuCtrl: MenuController

	rootPage:any = HomePage;
	Menu: any[] = [
		{ link: 'Data', pages: DataMongodbPage }
	];

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}

  	gotoPage(a) {
  	  this.nav.push(a);
  	}

}

