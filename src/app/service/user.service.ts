import { Injectable } from '@angular/core';
import { User } from '../user/user.module';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private localStorageKey = 'userManagementSystemUsers';

  constructor() {
    this.loadUsersFromLocalStorage();
  }

  private loadUsersFromLocalStorage(): void {
    const storedUsers = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    this.users.next(storedUsers);
  }

  private saveUsersToLocalStorage(users: User[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  getUsers(): Observable<User[]> {
    return this.users.asObservable();
  }

  addUser(user: User): void {
    const currentUsers = this.users.value;
    user.id = Date.now();
    currentUsers.push(user);
    this.users.next(currentUsers);
    this.saveUsersToLocalStorage(currentUsers);
  }

  editUser(updatedUser: User): void {
    const currentUsers = this.users.value;

    //const currentUsers = updatedUser;
    
    const index = currentUsers.findIndex((user:any) => user.id === updatedUser.id);
    if (index !== -1) {
      currentUsers[index] = updatedUser;
      this.users.next(currentUsers);
      this.saveUsersToLocalStorage(currentUsers);
    }
  }

  // updateUser(){

    
    
  // }

  deleteUser(userId: number): void {
    const currentUsers = this.users.value;
    const filteredUsers = currentUsers.filter(user => user.id !== userId);
    this.users.next(filteredUsers);
    this.saveUsersToLocalStorage(filteredUsers);
  }
  updateUsersInLocalStorage(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }
}
