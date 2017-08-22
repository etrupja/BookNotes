import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router } from "@angular/router";
import {  } from "../../date_adapter/AppDateAdapter";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  author;
  title;
  price;
  dateadded;
  dateread;
  description;
  imageUrl;
  rate;
  
  isRead:boolean = false;
  constructor(
    private firebaseService:FirebaseService,
    private router:Router) { }

  ngOnInit() {
  }
  updateDateAdded(date){
    this.dateadded = date;
    this.dateadded = this.dateadded.toDateString();
  }

  updateDateRead(date){
    this.dateread =date;
    this.dateread = this.dateread.toDateString();
    this.isRead = true;
  }

  submitAdd(){
    let book = {
      author: this.author,
      title: this.title,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      imageUrl: this.imageUrl
    }

    console.log('book - ', book);
    this.firebaseService.addBook(book);
    this.router.navigate(['books'])
  }
}
