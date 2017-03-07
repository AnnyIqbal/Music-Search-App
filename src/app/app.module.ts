import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from  './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { SPOTIFY_PROVIDERS } from './services/spotify.service';

const config = {
    apiKey: "AIzaSyCO9kSltise0fT__mVyB-gVQIwpz-NbKhc",
    authDomain: "music-search-app-8c043.firebaseapp.com",
    databaseURL: "https://music-search-app-8c043.firebaseio.com",
    storageBucket: "music-search-app-8c043.appspot.com",
    messagingSenderId: "874913072829"
  };

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'track/:id', component: TrackComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumComponent,
    ArtistComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(config)
  ],
  // providers: [ SpotifyService,
  //   { provide: LocationStrategy, useClass: HashLocationStrategy }
  // ],
   providers: [
    SPOTIFY_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// /*
//  * Angular Imports
//  */
// import {
//   Component
// } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { HttpModule } from '@angular/http';
// import { FormsModule } from '@angular/forms';
// import {
//   RouterModule,
//   Routes
// } from '@angular/router';
// import {
//   LocationStrategy,
//   HashLocationStrategy,
//   APP_BASE_HREF
// } from '@angular/common';

// /*
//  * Components
//  */
// import {SearchComponent} from './search-component/search.component';
// import {ArtistComponent} from './artist/artist.component';
// import {TrackComponent} from './track/track.component';
// import {AlbumComponent} from './album/album.component';

// /*
//  * Services
//  */
// import {SPOTIFY_PROVIDERS} from './services/spotify.service';

// /*
//  * Webpack
//  */
// // require('css/styles.css');

// @Component({
//   selector: 'router-app',
//   template: `
//   <router-outlet></router-outlet>
//   `
// })
// class RoutesDemoApp {
//   query: string;
// }

// const routes: Routes = [
//   { path: '', redirectTo: 'search', pathMatch: 'full' },
//   { path: 'search', component: SearchComponent },
//   { path: 'artists/:id', component: ArtistComponent },
//   { path: 'tracks/:id', component: TrackComponent },
//   { path: 'albums/:id', component: AlbumComponent },
// ];

// @NgModule({
//   declarations: [
//     RoutesDemoApp,
//     SearchComponent,
//     ArtistComponent,
//     TrackComponent,
//     AlbumComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpModule,
//     RouterModule.forRoot(routes) // <-- routes
//   ],
//   bootstrap: [ RoutesDemoApp ],
//   providers: [
//     SPOTIFY_PROVIDERS,
//     {provide: APP_BASE_HREF, useValue: '/'},
//     {provide: LocationStrategy, useClass: HashLocationStrategy}
//   ]
// })
// class RoutesDemoAppModule {}

// platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
//   .catch((err: any) => console.error(err));
