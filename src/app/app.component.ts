import { Component, ViewChild } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DataMongodbPage } from '../pages/data-mongodb/data-mongodb'
import { DataMongodbService } from '../pages/data-mongodb/data-mongodb.services'

@Component({
  templateUrl: 'app.html',
})

export class MyApp {
	@ViewChild('mycontent') nav

	rootPage:any = HomePage;
	Menu: any[] = [
		{ link: 'Beranda', pages: HomePage },
		{ link: 'Data', pages: DataMongodbPage }
	];
	datalist: any = []

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events, private dataMongodb: DataMongodbService) {
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

