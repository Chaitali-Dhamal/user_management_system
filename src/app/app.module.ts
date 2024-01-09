import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
