import { Component } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-book-app';

  constructor() {
    const config = {
        apiKey: "AIzaSyDf1tdtxtZ7JqLs4O0TULwYpXzqUhdPtlw",
        authDomain: "book-list-57e63.firebaseapp.com",
        databaseURL: "https://book-list-57e63.firebaseio.com",
        projectId: "book-list-57e63",
        storageBucket: "book-list-57e63.appspot.com",
        messagingSenderId: "489930116752"
      };
    firebase.initializeApp(config);
  }
}
