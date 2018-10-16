import { Component, NgZone, ElementRef, OnInit, ViewChild, } from '@angular/core';
//import { SelectSearchableComponent } from 'ionic-select-searchable';
import { NavController, ModalController,NavParams } from 'ionic-angular';
import {FormControl} from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
/// <reference types="@types/googlemaps" />
import { HttpClient } from '@angular/common/http';
import { SearchResultDetailsModal } from '../resultdetails/resultdetails';

export interface Config {
	locations: string;
}
@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html'
})
export class SearchResultPage {

  public config : Config;
  selected = [];
  rows = [];
  columns: any[] = [
    { name: 'Location', prop: 'area', width: 100},
    { name: 'Address', prop: 'development', width: 100},
    { name: 'Lot Count', prop: 'availableLots', width: 'auto'}
  ];
  longitude: any;
  latitude: any;

  @ViewChild("search")
  public searchElementRef;

constructor(public navCtrl: NavController, private mapsAPILoader: MapsAPILoader,private navParams: NavParams,
            private ngZone: NgZone, private _HTTP:HttpClient, public modalCtrl: ModalController) {     

              this.longitude = navParams.get('longitude');
              this.latitude = navParams.get('latitude');

      this.fetch((data) => {
        console.log(data);
        this.selected = [data];
        this.rows = data;
      });
            }

fetch(cb) {
  const req = new XMLHttpRequest();
  req.open('GET','http://localhost:3000/get-carpark/' + this.longitude + '/' + this.latitude);
  req.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
  req.onload = () => {
    cb(JSON.parse(req.response));
  };
  req.send();
}

onSelect({ selected }) {
  let obj = {carpark: this.selected};
  let myModal = this.modalCtrl.create(SearchResultDetailsModal, obj);
  myModal.present();
  //console.log('Select Event', selected, this.selected);
}
/*onActivate(event) {
  //console.log('Activate Event', event);
}*/

}
