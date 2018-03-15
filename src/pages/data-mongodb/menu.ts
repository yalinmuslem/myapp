import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular'

import { DataMongodbService } from './data-mongodb.services';

@Component({
	template: 
		`
		<ion-list>
			<ion-list-header>Menu Data</ion-list-header>
			<button ion-item (click)="close()" icon-right>Refresh <ion-icon name="refresh" item-end></ion-icon></button>
		</ion-list>
		`
})
export class MenuDataMongoDB {

	datalist: any = []

	constructor(
		private dataMongodbService: DataMongodbService, 
		public viewCtrl: ViewController
	) {}
	
	close() {
		this.datalist = this.dataMongodbService.getData()
		this.viewCtrl.dismiss();
	}	
}