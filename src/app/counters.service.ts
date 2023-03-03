import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountersService {

  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;


  incrementActiveToInactive(){
    this.activeToInactiveCounter++
    console.log(this.activeToInactiveCounter)
  }

  incrementInactiveToInactive(){
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter);
  }
}
