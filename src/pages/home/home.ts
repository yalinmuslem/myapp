import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	title = 'Belajar Ionic'

	label = 'TES LABEL'

	constructor(
		public navCtrl: NavController, 
		public menuCtrl: MenuController
	) {
		this.menuCtrl.close()
	}

}