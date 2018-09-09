import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  RedirectToFeedBackPage(){
    this.navCtrl.setRoot(FeedbackPage);
    }
}
