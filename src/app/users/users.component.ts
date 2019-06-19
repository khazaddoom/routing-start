import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
    // // console.log('ngOnInit of Users Component');
    // this.route.params.subscribe((params: Params) => {
    //   console.log(params)
    // })

    
  }

  

}
