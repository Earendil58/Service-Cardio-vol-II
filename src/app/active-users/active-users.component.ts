import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { CountersService } from '../counters.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{

  users!: string[];
  inactiveCounter: number = 0;

  constructor(private usersService: UsersService, private counterService: CountersService){}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers
  }


  onSetToInactive(id: number) {
    this.usersService.onSetToInactiveService(id);
  }
}
