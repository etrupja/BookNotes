import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
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

  removeBook(){
    this.firebaseService.deleteBook(this.id);
    this.router.navigate([''])
  }
}
