import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users;

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

}
