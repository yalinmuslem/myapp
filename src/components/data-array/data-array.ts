import { Component } from '@angular/core';

/**
 * Generated class for the DataArrayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'data-array',
  templateUrl: 'data-array.html'
})
export class DataArrayComponent {

  text: string;

  constructor() {
    console.log('Hello DataArrayComponent Component');
    this.text = 'Hello World';
  }

}
