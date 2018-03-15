import { Component } from '@angular/core';
import { 
	IonicPage, 
	NavController, 
	NavParams, 
	AlertController, 
	MenuController,
	Events,
	PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { DataMongodbService } from './data-mongodb.services';
import { MenuDataMongoDB } from './menu'

@IonicPage()
@Component({
  selector: 'page-data-mongodb',
  templateUrl: 'data-mongodb.html',
})
export class DataMongodbPage {

	configUrl = 'http://192.168.100.6:7000/belajar-slim/index.php'
	title:string = 'Data'
	datalist: any = []
	chkdata: any = []

	constructor(
		private storage: Storage,
		private dataMongodbService: DataMongodbService,
		public navCtrl: NavController, 
		public navParams: NavParams, 
		public alertCtrl: AlertController,
		public menuCtrl: MenuController,
		public popoverCtrl: PopoverController,
		public events: Events
	) {
		this.menuCtrl.close()
		events.subscribe('getdata', (data) => {
			this.datalist = data
		})
	}

	ngOnInit() {
		this.getData()
	}

	getData() {
		this.datalist = this.dataMongodbService.getData()
	}

	ionViewDidLoad() { }

	delData(id) {
		let confirm = this.alertCtrl.create({
			title: 'Hapus Data',
			message: 'Anda yakin menghapus data ini',
			buttons: [
				{
					text: 'Batal',
					handler: () => {
						
					}
				},
				{
					text: 'Yakin',
					handler: () => {
						this.dataMongodbService.delData(id)
						this.navCtrl.pop()
						this.navCtrl.push(DataMongodbPage);
					}
				}
			]
		});
		confirm.present();
	}

	chkData(id, event) {
		if(event.checked && this.chkdata.indexOf(id) < 0) {
			this.chkdata.push(id)
		}
		else {
			this.chkdata.splice(id, 1)
		}
		this.storage.remove('myChkData');
		this.storage.set('myChkData', this.chkdata);
	}

	showMenu() {
		let popover = this.popoverCtrl.create(MenuDataMongoDB);
		popover.present();
	}

}
