import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from 'ionic-angular';

@Injectable()
export class DataMongodbService {

	configUrl = 'http://192.168.100.6:7000/belajar-slim/index.php'
	datalist: any = []

	constructor(
		private http: HttpClient, 
		public loadingCtrl: LoadingController, 
		public toastCtrl: ToastController
	) {}
	
	presentToast(msg) {
		let toast = this.toastCtrl.create({
			message: msg,
			duration: 3000
		});
		toast.present();
	}
	getData() {
		this.http.get(
			this.configUrl+'/data-keluarga-kami'
		)
		.subscribe(res => {
			this.datalist = res
		})
		return this.datalist
	}

	newData(params) {
		let loader = this.loadingCtrl.create({
			content: "Please wait...",
		});
		loader.present();

		this.http.post(
			this.configUrl+'/tambah-keluarga-kami', 
			{fullName: params.fullname, nickName: params.nickname, birthDate: new Date('1987-09-14')}
		)
		.subscribe(res => {
			this.getData()
		},
		err => {
			this.presentToast('Input Data Gagal')
		},
		() => {
			this.presentToast('Input Data Berhasil')
		})
		loader.dismiss();
	}

	delData(id) {
		this.http.post(
			this.configUrl+'/hapus-keluarga-kami',
			{id: id}
		)
		.subscribe(resp => {
			this.getData()
		})
	}
}