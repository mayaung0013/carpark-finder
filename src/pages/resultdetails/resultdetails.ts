import { Component, NgZone, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ViewController,NavParams,Platform } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-resultdetails',
  templateUrl: 'resultdetails.html'
})

export class SearchResultDetailsModal {
carpark: string = this.navParams.get('carpark');
public options: any;
current_longitude: any;
current_latitude: any;
result = {};
locations = [];
str_locations :any;

constructor(public navParams: NavParams,public navCtrl: NavController, public modalCtrl: ModalController,private viewCtrl: ViewController,
  private launchNavigator: LaunchNavigator,public platform:Platform,private geolocation: Geolocation) {     
  console.log('Select Event', this.carpark);
  this.platform.ready().then(()=>{
  this.geolocation.getCurrentPosition().then((resp) => {
    this.current_latitude = resp.coords.latitude;
    this.current_longitude = resp.coords.longitude;
 }).catch((error) => {
    alert(error);
 });
});

    alert(this.current_longitude + "  " + this.current_latitude);
}

closeModal() {
  this.viewCtrl.dismiss();
}
LaunchNavigation(){
  console.log(this.carpark);
  /*
  this.platform.ready().then(()=>{
  this.launchNavigator.navigate([50.279306, -5.163158],{
    start: this.current_longitude + "," + this.current_latitude//"50.342847, -4.749904"
})
  .then(
    success => alert('Launched navigator'),
    error => alert('Error launching navigator' + error)
  );
});
*/}
}
