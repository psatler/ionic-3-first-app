import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  //functions for the data page created

  public username:string = "Pablo Satler (do código)"

  public sumTwoNumbers():void{
    alert(5+2);
  }

  public sumWithParameters(num1:number, num2:number):void{
    alert(num1 + num2);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    /*
    Here we put the method calls
    */
    // console.log('ionViewDidLoad FeedPage
    // this.sumTwoNumbers();
    // this.sumWithParameters(3,5);

  }

}
