import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  user1:User={};
  user2:User={};
  usernameOne: string = ""
  usernameTwo: string = ""

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.usernameOne).subscribe({
      next:(data)=>{
        this.user1=data;
      },
      error:()=>alert('First Username is Invalid')
    })
    this.userService.inspectUser(this.usernameTwo).subscribe({
      next:(data)=>{
        this.user2=data;
      },
      error:()=>alert('Second Username is Invalid')
    })
  }
}
