import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  //get all the books
  allBooks: any;
  
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute) {}


    ngOnInit() {
      this.allBooks = this.firebaseService.getBooks();
      console.log(this.allBooks);
    }
}
