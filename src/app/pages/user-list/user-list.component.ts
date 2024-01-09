// user-list.component.ts
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../user/user.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
  users: User[] = [];
  userObj: any = {};
  user: User = { id: 0, name: '', email: '', role: '', action: '' };
  editUserdata: any = {};
  displayedColumns: string[] = ['name', 'email', 'role', 'action'];
  dataSource = new MatTableDataSource<User>([]);
  @ViewChild('yourModal') yourModal: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; // Added the definite assignment assertion here
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource.data = users;
    });
  }
  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId);
    }
  }

  editUser(user: any): void {
    this.editUserdata = user;
  }
  updateUser(): void {
    debugger;
    const index = this.users.findIndex(user => user.id === this.editUserdata.id);

    if (index !== -1) {
      // Update the user in the local array
      this.users[index] = { ...this.editUserdata };

      // Update the user in local storage
      this.userService.updateUsersInLocalStorage( {...this.editUserdata} );

    } else {
      console.error('User not found for updating:', this.editUserdata);
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  
}
