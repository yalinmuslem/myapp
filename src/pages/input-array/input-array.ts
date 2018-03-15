import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { DataMongodbService } from '../data-mongodb/data-mongodb.services'

@IonicPage()
@Component({
  selector: 'page-input-array',
  templateUrl: 'input-array.html',
})
export class InputArrayPage {
	fullname: string = 'Mochammad Yalinulloh'
	nickname: string = 'Papi'
	birthDate : Date = new Date('1987-09-14')

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		private dataMongodb: DataMongodbService, 
		public menuCtrl: MenuController
	) {
		this.menuCtrl.close()
	}

	newData() {
		this.dataMongodb.newData({fullname: this.fullname, nickname: this.nickname})
		this.navCtrl.pop()
	}

}
