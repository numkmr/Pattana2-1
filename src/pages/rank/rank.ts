import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CardPage } from '../card/card';

/**
 * Generated class for the RankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rank',
  templateUrl: 'rank.html',
})
export class RankPage {

  Rankingother: Array <any> =[];
  Rankingme: Array <any> =[];

  //Get pushed from quiz.ts
  ScoreCount: any;
  ShowScore:any;
  NOOfQues:any;

  constructor(public alertCtrl: AlertController, private navCtrl: NavController, public navParams: NavParams) {
    this.Rankingother= ["Kamonruk Sariyarsheeva","Suvijak Permpholphattana","Prakitchai Panphila"]
    this.Rankingme = ["Pakpoom Rachtracho"]
    this.ScoreCount = navParams.get('scorecount');
    this.NOOfQues = navParams.get('quesNO');
    this.ShowScore = navParams.get('showscore');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankPage');
  }



  clickhome()
  {
    //this.navCtrl.push(HomePage)
    this.navCtrl.popToRoot();
  }
 
  clickrank()
  {
    this.navCtrl.push(RankPage)
  }

  ToPageCard() {
    this.navCtrl.push(CardPage)
  }


}
