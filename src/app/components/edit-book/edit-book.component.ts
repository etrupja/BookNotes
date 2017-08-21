import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id;
  author;
  title;
  dateadded;
  isRead;
  dateread;
  description;
  imageUrl;
  price;
  rate;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.author= book.author;
      this.title= book.title;
      this.dateadded= book.dateadded;
      this.isRead = book.isRead;
      this.dateread= book.dateread;
      this.description= book.description;
      this.imageUrl= book.imageUrl;
      this.price= book.price;
      this.rate= book.rate;
    });
  }

  submitEdit(){
    let book = {
      author: this.author,
      title: this.title,
      dateadded: this.dateadded,
      isRead:this.isRead,
      dateread: this.dateread,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      rate: this.rate
    }

    this.firebaseService.updateBook(this.id, book);
    this.router.navigate(['/books'])
  }

}
