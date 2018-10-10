import { Component, NgZone, ElementRef, OnInit, ViewChild, } from '@angular/core';
//import { SelectSearchableComponent } from 'ionic-select-searchable';
import { NavController, ModalController } from 'ionic-angular';
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
    { prop: 'carpark'} , 
    { name: 'address' }, 
    { name: 'freeSlotCount' }
  ];
  
  @ViewChild("search")
  public searchElementRef;

constructor(public navCtrl: NavController, private mapsAPILoader: MapsAPILoader,
            private ngZone: NgZone, private _HTTP:HttpClient, public modalCtrl: ModalController) {     

      this.fetch((data) => {
        this.selected = [data.locations[2]];
        this.rows = data.locations;
      });
            }

fetch(cb) {
  const req = new XMLHttpRequest();
  req.open('GET', `../../assets/data/locations.json`);

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
