import { Component, NgZone, ElementRef, OnInit, ViewChild, } from '@angular/core';
//import { SelectSearchableComponent } from 'ionic-select-searchable';
import { NavController } from 'ionic-angular';
import {FormControl} from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
/// <reference types="@types/googlemaps" />
import { HttpClient } from '@angular/common/http';

export interface Config {
	locations: string;
}
@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html'
})
export class SearchResultPage {

  public rows : any;
  public columns : any;
  public config : Config;


  @ViewChild("search")
  public searchElementRef;

constructor(public navCtrl: NavController, private mapsAPILoader: MapsAPILoader,
            private ngZone: NgZone, private _HTTP:HttpClient) {     

    this.columns = [
        { prop: 'carpark' },
        { name: 'address' },
        { name: 'freeSlotCount' }
      ];
            }

ionViewDidLoad() {
    //Data Table
    this._HTTP
    .get<Config>('../../assets/data/locations.json')
    .subscribe((data) =>
    {
       this.rows = data.locations;
    });
}
}
