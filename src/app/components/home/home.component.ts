import { Component, OnInit } from '@angular/core';
//connect to firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Book } from "../../interfaces/Book";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //get all the books
  favoriteBooks: any;
  unreadBooks: any;
  constructor(private firebaseService: FirebaseService) {}
  
  ngOnInit() {
    this.firebaseService.getFavoriteBooks().subscribe(favoriteBooks =>{
      this.favoriteBooks = favoriteBooks;
    })
    this.firebaseService.getUnreadBooks().subscribe(books =>{
      this.unreadBooks = books;
    })
  }
}