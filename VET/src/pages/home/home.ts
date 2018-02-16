import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RangePage} from '../range/range'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  range = RangePage

  constructor(public navCtrl: NavController) {

  }

}
