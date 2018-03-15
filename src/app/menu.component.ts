import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({})
export class MenuComponent {

	constructor(public navCtrl: NavController, public menuCtrl: MenuController) {}

	gotoPage(a) {
		console.log(a)
		this.menuCtrl.close();
		this.navCtrl.push(a);
	}
	
}