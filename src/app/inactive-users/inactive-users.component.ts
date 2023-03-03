import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CountersService } from '../counters.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  users!: string[];

  constructor(private userService: UsersService, private counterService: CountersService){}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers
  }


  onSetToActive(id: number) {
    this.userService.onSetToActiveService(id);
  }
}
