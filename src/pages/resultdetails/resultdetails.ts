import { Component, NgZone, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ViewController,NavParams,Platform } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


@Component({
  selector: 'page-resultdetails',
  templateUrl: 'resultdetails.html'
})

export class SearchResultDetailsModal {
carpark: string = this.navParams.get('carpark');
public options: any;

constructor(public navParams: NavParams,public navCtrl: NavController, public modalCtrl: ModalController,private viewCtrl: ViewController,
  private launchNavigator: LaunchNavigator,public platform:Platform) {     
  console.log('Select Event', this.carpark);
}

closeModal() {
  this.viewCtrl.dismiss();
}
LaunchNavigation(){
  this.platform.ready().then(()=>{
  this.launchNavigator.navigate([50.279306, -5.163158],{
    start: "50.342847, -4.749904"
})
  .then(
    success => alert('Launched navigator'),
    error => alert('Error launching navigator' + error)
  );
});}
}
