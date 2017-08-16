// import { AngularFireModule } from 'angularfire2';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Book } from "../interfaces/Book";


@Injectable()
export class FirebaseService {
  books: FirebaseListObservable<any[]>;
  favoriteBooks: FirebaseListObservable<any[]>;
  bookDetails: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) {
   }



   getBooks() {
      this.books = this.db.list('/books') as FirebaseListObservable<Book[]>;
      return this.books;
   }

   getFavoriteBooks() {
    this.books = this.db.list('/books') as FirebaseListObservable<Book[]>;
    return this.books;
 }

    getBookDetails(id){
      this.bookDetails = this.db.object('/books/'+id) as FirebaseObjectObservable<Book>  
      return this.bookDetails;     
    }
}