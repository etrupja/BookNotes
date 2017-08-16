import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id: any;
  bookDetails: any;

  constructor(private firebaseService: FirebaseService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    // get the book ID
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.bookDetails = book;
    });
  }
}
