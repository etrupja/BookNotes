// import { AngularFireModule } from 'angularfire2';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Book } from "../interfaces/Book";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FirebaseService {
  books: FirebaseListObservable<any[]>;
  favoriteBooks: Observable<any>;
  bookDetails: FirebaseObjectObservable<any>;
  newBook:Book;
  
  constructor(private db: AngularFireDatabase) {}



  getBooks() {
    this.books = this.db.list('/books') as FirebaseListObservable<Book[]>;
    return this.books;
  }

  getFavoriteBooks() {
    this.books = this.db.list('/books') as FirebaseListObservable<Book[]>;
    this.favoriteBooks = this.books.map(books => {
      const topRatedBooks = books.filter(item => item.rate > 4 );
      return topRatedBooks;
    })
    return this.favoriteBooks;
  }

  getBookDetails(id){
    this.bookDetails = this.db.object('/books/'+id) as FirebaseObjectObservable<Book>;
    return this.bookDetails;     
  }

  updateBook(id, bookDetails){
    return this.books.update(id,bookDetails);
  }

  addBook(bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
    return this.books.push(filteredBook);
  }

  deleteBook(id){
    return this.books.remove(id);
  }
}