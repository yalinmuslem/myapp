import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events } from 'ionic-angular';

import { DataMongodbService } from '../data-mongodb/data-mongodb.services'

@IonicPage()
@Component({
  selector: 'page-input-array',
  templateUrl: 'input-array.html',
})
export class InputArrayPage {
	datalist: any = []
	fullname: string = 'Mochammad Yalinulloh'
	nickname: string = 'Papi'
	birthDate : Date = new Date('1987-09-14')

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		private dataMongodb: DataMongodbService, 
		public menuCtrl: MenuController,
		public events: Events
	) {
		this.menuCtrl.close()
	}

	newData() {
		this.dataMongodb.newData({fullname: this.fullname, nickname: this.nickname})
		this.navCtrl.pop()
	}

	ngOnDestroy() {
		this.datalist = this.dataMongodb.getData()
		this.events.publish('getdata', this.datalist);
	}

}
