import { Component, OnInit } from '@angular/core';
//connect to firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Book } from "../../interfaces/Book";
import { FirebaseService } from "../../services/firebase.service";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //get all the books
  favoriteBooks: any;
  unreadBooks: any;

  //authentication related
  authenticated: boolean = false;
  user: Observable<firebase.User>;
  
  constructor(private firebaseService: FirebaseService, public af: AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = af.authState;
          this.authenticated = true;
          
          this.firebaseService.getFavoriteBooks().subscribe(favoriteBooks =>{
            this.favoriteBooks = favoriteBooks;
          })
          this.firebaseService.getUnreadBooks().subscribe(books =>{
            this.unreadBooks = books;
          })

        }
      });
  }
  
  ngOnInit() {
    this.firebaseService.getFavoriteBooks().subscribe(favoriteBooks =>{
      this.favoriteBooks = favoriteBooks;
    })
    this.firebaseService.getUnreadBooks().subscribe(books =>{
      this.unreadBooks = books;
    })
  }
}