import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: {id: number, name: string};

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   
   this.route.params.subscribe(
    
    (params: Params) => {     
      this.user = { id: params.id, name: params.name};
    }
   )
  }

  handleClick() {
    this.router.navigate(['users', '123123']);
  }

}
