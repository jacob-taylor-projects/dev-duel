import { Component, Input, OnInit } from '@angular/core';
import { User, UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {
  user:User={};
  username: string = ""


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.username).subscribe({
      next:(data)=>{
        this.user=data;
      },
      error:()=>alert('Invalid Username')
    })
  }



}
