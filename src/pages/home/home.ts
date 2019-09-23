import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RiteshPage } from '../ritesh/ritesh';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  countervar: number=0;
  uname: string;
  contact: any;
  public text: string;
  public number: number;
  list = [];
  inputtext: string;
  key:string = 'username';
  //val: string;

  constructor(public navCtrl: NavController,private dataProvider: DataProvider,public http: HttpClient,private storage: Storage) {
    //this.datProvider.getResult()
 
       //.subscribe(getList => console.log(getList))
   
  }

  details(){
  console.log("second page");
  this.navCtrl.push(RiteshPage,{text: this.text,number: this.number});
  
} 

 dosomething(){
   console.log('Do Something');
 }

 getRes(){
   
   this.dataProvider.getResult().subscribe(dat => this.list = [dat]);
   //this.dataProvider.getResult().subscribe(list => console.log(list));
   this.navCtrl.push(RiteshPage,{list: this.list});
 }

 savedata(){
  this.storage.set(this.key,this.inputtext);
 }
  
 loaddata(){
  this.storage.get(this.key).then((val) => {
    console.log('Your username is', val);
  });
 
 }
}


