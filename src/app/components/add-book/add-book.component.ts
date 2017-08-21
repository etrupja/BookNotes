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
  price;
  dateadded:Date;
  // isRead:boolean = false;
  dateread:Date;
  description;
  // imageUrl;
  rate;
  constructor(private firebaseService:FirebaseService,
    private router:Router) { }

  ngOnInit() {
  }

  // switchCheckBox(event: any){
  //   this.isRead = event;
  //   console.log('event - ',event);
  // }

  submitAdd(){
    let book = {
      author: this.author,
      title: this.title,
      price: this.price,
      dateadded: this.dateadded,
      // isRead: this.isRead,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      // imageUrl: this.imageUrl
    }
    console.log('book - ', book);
    this.firebaseService.addBook(book);
    this.router.navigate(['books'])
  }
}
