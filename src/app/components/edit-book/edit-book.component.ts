import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router,ActivatedRoute } from "@angular/router";
import { AppDateAdapter } from "../../adapter/AppDateAdapter";
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id;
  author;
  title;
  dateadded:Date;
  dateread;
  description;
  imageUrl;
  price;
  rate;

  dateAdapter:AppDateAdapter = new AppDateAdapter();
  
  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.author= book.author;
      this.title= book.title;
      this.dateadded= this.dateAdapter.format(book.dateadded,"normal");
      this.dateread= book.dateread;
      this.description= book.description;
      this.imageUrl= book.imageUrl;
      this.price= book.price;
      this.rate= book.rate;
    });

    // console.log('DateAdded - ',this.dateadded);
    // console.log('DateRead - ',this.dateread);


  }

  updateDateAdded(date){
    this.dateadded = this.dateAdapter.format(date,"input");
  }

  updateDateRead(date){
    this.dateread =this.dateAdapter.format(date,"input");
  }

  submitEdit(){
    let book = {
      author: this.author,
      title: this.title,
      dateadded: this.dateadded,
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
