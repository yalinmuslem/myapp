import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DataMongodbService } from './data-mongodb.services';

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

	constructor(public navCtrl: NavController, public navParams: NavParams, private dataMongodbService: DataMongodbService, private storage: Storage) { }

	ngOnInit() {
		this.getData()
	}

	getData() {
		this.storage.get('datalist').then((val) => {
			this.datalist = val
		})
	}

	ionViewDidLoad() { }

	delData(id) {
		this.dataMongodbService.delData(id)
		this.navCtrl.pop()
		this.navCtrl.push(DataMongodbPage);
	}

	chkData(id, event) {
		if(event.checked && this.chkdata.indexOf(id) < 0) {
			this.chkdata.push(id)
		}
		else {
			this.chkdata.splice(id, 1)
		}
	}

}
