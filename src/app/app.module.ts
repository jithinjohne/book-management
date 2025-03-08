import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './books/book.redecuer';
import { BookListComponent } from './book-list/book-list.component'; // Update the path as necessary
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/book.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({ book: bookReducer }),
    EffectsModule.forRoot([BookEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
