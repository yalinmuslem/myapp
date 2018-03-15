import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataMongodbPage } from './data-mongodb';

@NgModule({
  declarations: [
    DataMongodbPage,
  ],
  imports: [
    IonicPageModule.forChild(DataMongodbPage),
  ],
})
export class DataMongodbPageModule {}
