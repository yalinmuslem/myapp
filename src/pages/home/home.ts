import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InputArrayPage } from '../../pages/input-array/input-array'
import { DataMongodbPage } from '../../pages/data-mongodb/data-mongodb'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	Menu: any[] = [
		{ link: 'Input Data', pages: InputArrayPage },
		{ link: 'Data', pages: DataMongodbPage }
	];

	title = 'Belajar Ionic'

	label = 'TES LABEL'

	gotoPage(a) {
		this.navCtrl.push(a);
	}

	constructor(public navCtrl: NavController) {}

}