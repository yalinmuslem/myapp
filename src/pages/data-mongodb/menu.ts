import { Component } from '@angular/core';
import { ViewController, Events, NavController } from 'ionic-angular'
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

	done = false
	datalist: any = []

	constructor(
		private storage: Storage,
		private dataMongodbService: DataMongodbService, 
		public navCtrl: NavController,
		public viewCtrl: ViewController,
		public events: Events
	) {	}
	
	getData() {
		this.datalist = this.dataMongodbService.getData()
		this.events.publish('getdata', this.datalist);
		this.viewCtrl.dismiss();
	}

	delData() {
		var z = 0
		this.storage.get('myChkData').then((val) => {
			for(let i of val) {
				this.dataMongodbService.delData(i)
				z++
			}
			console.log(z, val.length)
			if(z >= val.length) {
				this.done = true
			}
			if(this.done) {
				this.storage.remove('myChkData');
				this.viewCtrl.dismiss();
			}
		});
	}

	ngOnDestroy() {
		this.datalist = this.dataMongodbService.getData()
		this.events.publish('getdata', this.datalist);
	}
}