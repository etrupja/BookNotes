import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//firebase configuration
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

//browse animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdGridListModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, DateAdapter, MD_DATE_FORMATS } from '@angular/material';

//Services
import { FirebaseService } from "./services/firebase.service";

//Forms
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'books', component:BooksComponent},
  {path: 'book/:id', component:BookComponent},
  {path: 'add-book', component:AddBookComponent},
  {path:'edit-book/:id', component:EditBookComponent},
  {path:'delete-book/:id', component:DeleteBookComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    BooksComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule,MdCardModule,MdGridListModule,MdInputModule,MdDatepickerModule,MdNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase, 'book-store'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
