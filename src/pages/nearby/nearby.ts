import { Component, NgZone, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormControl} from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
/// <reference types="@types/googlemaps" />
import { HttpClient } from '@angular/common/http';

export interface Config {
	locations: string;
}
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})
export class NearByPage {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public rows : any;
  public columns : any;
  public config : Config;


  @ViewChild("search")
  public searchElementRef;

constructor(public navCtrl: NavController, private mapsAPILoader: MapsAPILoader,
            private ngZone: NgZone, private _HTTP:HttpClient) { 
 
    //set current position
    this.setCurrentPosition();   
    this.zoom = 10;
    this.latitude = 1.291667;//39.8282;
    this.longitude = 103.85;//-98.5795;

    //create search FormControl
    this.searchControl = new FormControl();


    this.columns = [
        { prop: 'carpark' },
        { name: 'address' },
        { name: 'freeSlotCount' }
      ];
            }

ionViewDidLoad() {
    //set google maps defaults
    this.zoom = 10;
    this.latitude = 1.291667;//39.8282;
    this.longitude = 103.85;//-98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
        let nativeHomeInputBox = document.getElementById('SerchAddr').getElementsByTagName('input')[0];
        let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox,{
            componentRestrictions: {country: "sg"}
        });
        autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
                //get the place result
                let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }

                //set latitude, longitude and zoom
                this.latitude = place.geometry.location.lat();
                this.longitude = place.geometry.location.lng();
                this.zoom = 12;
            });
        });
    });
    //Data Table
    this._HTTP
    .get<Config>('../../assets/data/locations.json')
    .subscribe((data) =>
    {
       this.rows = data.locations;
    });
}
 //Google Map API
  private setCurrentPosition() {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
              this.zoom = 12;
          });
      }
  }
}
