import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:AddUserComponent
  },
  {
    path:'user-list',
    component:UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
