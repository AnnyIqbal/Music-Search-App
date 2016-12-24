// import { Component, OnInit } from '@angular/core';
// import { SpotifyService } from '../services/spotify.service';

// @Component({
//   selector: 'app-track',
//   template: 
//   `
//     <div *ngIf="track">
//       <h1>{{ track.name }}</h1>
//       <p> <img src="{{ track.album.images[1].url }}"> </p>
//       <p> <audio controls src="{{ track.preview_url }}"></audio> </p>
//       <p> <button (click)="back()">Back</button> </p>
//     </div> 
//   `
//   // templateUrl: './track.component.html',
//   // styleUrls: ['./track.component.css']
// })
// export class TrackComponent implements OnInit {

//   constructor(public spotify: SpotifyService) { }

//   ngOnInit(): void {
//     console.log('TrackComponent');
//     // this.spotify.getTrack(track.id).subscribe((res: any) => this.renderTrack(res));
//   }

// }

/*
 * Angular
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

/*
 * Services
 */
import {SpotifyService} from '../services/spotify.service';


// angular2 doesn't like 'track' as the selector
// because apparently it's an existing HTML element
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
@Component({
  selector: 'theTrack',
  template: `
  <div *ngIf="track">
    <h1>{{ track.name }}</h1>

    <p>
      <img src="{{ track.album.images[1].url }}">
    </p>

    <p>
      <audio controls src="{{ track.preview_url }}"></audio>
    </p>

    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService,
              private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    this.location.back();
  }

  renderTrack(res: any): void {
    this.track = res;
  }
}
