import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieProvider} from "../../providers/movie/movie"

/**
 * Generated class for the MoviedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetails',
  templateUrl: 'moviedetails.html',
  providers: [
    MovieProvider
  ]
})
export class MoviedetailsPage {

  public movieVar;
  public movieId;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    // console.log('ionViewDidLoad MoviedetailsPage');
    this.movieId = this.navParams.get("id");
    // console.log("Filme recebido: ", this.movieId);
    this.movieProvider.getMovieDetails(this.movieId).subscribe(data=>{
      let object_returned = (data as any)._body;
      this.movieVar = JSON.parse(object_returned);
      console.log(this.movieVar);
    }, error =>{
      console.log(error);
    })
  }

}
