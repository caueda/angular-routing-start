import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.usersService.getUser(+this.activatedRoute.snapshot.params['id']);

    this.activatedRoute.params.subscribe((p: Params) =>{
      this.user = this.usersService.getUser(+p['id']);
    });
    console.log(this.user);
  }

}
