import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Book } from "../interfaces/Book";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FirebaseService {
  books: FirebaseListObservable<any[]>; ; //from Firebase
  bookDetails: FirebaseObjectObservable<any>; //from Firebase
  favoriteBooks: Observable<any>;
  // booksByCategory: Observable<any>;
  
  constructor(private db: AngularFireDatabase) {}

  getBooks() {
    this.books = this.db.list('/books') as FirebaseListObservable<Book[]>;
    return this.books;
  }

  // getBooksByCategory(category:string){
  //   this.booksByCategory = this.db.list('/books').map(books => {
  //     const booksBycategory = books.filter(item => item.category === category );
  //     return booksBycategory;
  //   });
  //   return this.booksByCategory;
  // }

  getFavoriteBooks() {
    this.favoriteBooks = this.db.list('/books').map(books => {
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
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
    return this.books.update(id,filteredBook);
  }

  addBook(bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
    console.log('Filtered Books: ',filteredBook);
    return this.books.push(filteredBook);
  }

  deleteBook(id){
    return this.books.remove(id);
  }
}