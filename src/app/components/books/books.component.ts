import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  //get all the books
  allBooks: any;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getBooks().subscribe(allBooks =>{
      this.allBooks = allBooks;
    })
  }

}
