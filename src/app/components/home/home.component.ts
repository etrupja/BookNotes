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
  books: any;
  constructor(private firebaseService: FirebaseService) {}
  
  ngOnInit() {
    this.firebaseService.getBooks().subscribe(allBooks =>{
      console.log('allBooks - ',allBooks);
      this.books = allBooks;
      console.log('this.books  ',this.books);
    })
  }
}