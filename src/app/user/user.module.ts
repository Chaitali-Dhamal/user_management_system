import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {

 }
 // user.model.ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  action:string;
}

