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
  private parametersObservable: any;
  
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute) {}


    ngOnInit() {
      this.parametersObservable = this.route.params.subscribe(params => {
         const category = params['category'];
         console.log('category - ',category);
         if(category=== 'undefined')
          {
            this.firebaseService.getBooks().subscribe(allBooks =>{
              this.allBooks = allBooks;
            })
          }
          else{
            this.firebaseService.getBooksByCategory(category).subscribe(allBooks =>{
              this.allBooks = allBooks;
            })
          }
       });
       console.log(this.allBooks);
    }
}
