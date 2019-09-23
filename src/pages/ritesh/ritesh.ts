import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RiteshPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ritesh',
  templateUrl: 'ritesh.html',
})
export class RiteshPage {
  public text: string;
  public number: number;
  list = [];
  //public API: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = (this.navParams.get('text'));
    this.number = (this.navParams.get('number'));
    this.list = (this.navParams.get('list'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiteshPage');
  }

}
