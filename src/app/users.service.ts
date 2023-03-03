import { Injectable } from '@angular/core';
import { CountersService } from './counters.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  constructor(private counterService: CountersService) { }

  onSetToInactiveService(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  onSetToActiveService(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToInactive();
  }


}
