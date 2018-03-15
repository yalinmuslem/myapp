import { Component } from '@angular/core';
import { ViewController, Events } from 'ionic-angular'
import { Storage } from '@ionic/storage';

import { DataMongodbService } from './data-mongodb.services';

@Component({
	template: 
		`
		<ion-list>
			<ion-list-header>Menu Data</ion-list-header>
			<button ion-item (click)="getData()" icon-right>Refresh <ion-icon name="refresh" item-end></ion-icon></button>
			<button ion-item (click)="delData()" icon-right>Hapus <ion-icon name="trash" item-end></ion-icon></button>
		</ion-list>
		`
})
export class MenuDataMongoDB {

	datalist: any = []

	constructor(
		private storage: Storage,
		private dataMongodbService: DataMongodbService, 
		public viewCtrl: ViewController,
		public events: Events
	) {	}
	
	getData() {
		this.datalist = this.dataMongodbService.getData()
		this.events.publish('getdata', this.datalist);
		this.viewCtrl.dismiss();
	}

	delData() {
		this.storage.get('myChkData').then((val) => {
			for(let i of val) {
				this.dataMongodbService.delData(i)
			}
		});
		this.storage.remove('myChkData');
		this.getData()
	}
}