import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  author;
  title;
  category;
  price;
  dateadded:Date;
  dateread:Date;
  description;
  imageUrl;
  rate;
  constructor(private firebaseService:FirebaseService,
    private router:Router) { }

  ngOnInit() {
  }

  submitAdd(){
    let book = {
      author: this.author,
      title: this.title,
      category:this.category,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      imageUrl: this.imageUrl
    }
    this.firebaseService.addBook(book);
    this.router.navigate(['books'])
  }
}
