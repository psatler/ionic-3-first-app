import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieProvider } from "../../providers/movie/movie"
import { LoadingController } from 'ionic-angular';

import { MoviedetailsPage } from "../moviedetails/moviedetails"

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
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  //Create JSON objects/variable
  public feed_object = {
    title: "Pablo Satler",
    date: "November 5, 1955",
    description: "Criando uma nova pagina para o app feito em Ionic. Teste",
    numOfLikes: 12,
    numOfComments: 4,
    timeSinceComment: "11h ago"
  }

  public loader;
  public refresher;
  public isRefreshing:boolean = false;
  public infiniteScroll;
  public movie_list = new Array<any>(); //creating a new object of any type
  public page = 1;

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading movies...",
      // duration: 3000 //commenting this so the message will be displaying until all the content is loaded
    });
    this.loader.present();
  }

  finishLoading(){
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    // console.log('Begin async operation', refresher);
    this.refresher = refresher;
    this.isRefreshing = true; //indicates that the user has issued an intent to refresh the page
    this.loadMovies(); //call the method to load the movie list
    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   refresher.complete();
    // }, 2000);
  }

  goToMoreDetailsPage(movieVar){
    console.log(movieVar);
    this.navCtrl.push(MoviedetailsPage, {id: movieVar.id }); //calling the movieDetaisPage and passing an object to it
  }


  //this is triggered when the user reaches the bottom of the feed page
  doInfinite(infiniteScroll) {
    // console.log('Begin async operation');
    this.page++; //incrementing to load another page from movie db
    this.infiniteScroll = infiniteScroll;
    this.loadMovies(true);
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    /*
    Here we put the method calls
    */
    this.loadMovies();

  }

  loadMovies(newpage:boolean = false){
    this.presentLoading(); //start the loading message
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data=>{
        const response = (data as any); //transforming the object in an object of ANY type
        const object_returned = JSON.parse(response._body); //transforming the text response into JSON

        if(newpage){
          console.log(this.page);
          this.movie_list = this.movie_list.concat(object_returned.results); //concatenating the newly results into the existing one
          console.log(this.movie_list);
          this.infiniteScroll.complete(); //stop showing the loading icon
        }else {
          this.movie_list = object_returned.results; //I know it is results from this: https://developers.themoviedb.org/3/movies/get-popular-movies
        }

        console.log(object_returned);
        this.finishLoading(); //terminates the loading message
        if(this.isRefreshing){
          this.refresher.complete(); //finish the refresh process
          this.isRefreshing = false;
        }
      }, error=>{
        console.log(error);
        this.finishLoading(); //terminates the loading message
        if(this.isRefreshing){
          this.refresher.complete(); //finish the refresh process
          this.isRefreshing = false;
        }
      }
    )
  }

}
