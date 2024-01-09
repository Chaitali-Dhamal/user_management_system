// add-user.component.ts
import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../user/user.module';
import { Router } from '@angular/router';
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: User = { id: 0, name: '', email: '', role: '', action:''};

  constructor(private userService: UserService,private router: Router,) {}

  addUser(): void {
    this.userService.addUser(this.user);
    this.user = { id: 1, name: '', email: '', role: '', action:'' };
    this.router.navigate(['/user-list']);
  }
}
