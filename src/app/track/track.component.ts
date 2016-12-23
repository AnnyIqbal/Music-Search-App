import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor(public spotify: SpotifyService) { }

  ngOnInit(): void {
    this.spotify.getTrack(this.id).subscribe((res: any) => this.renderTrack(res));
  }

}
