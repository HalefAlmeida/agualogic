import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aql-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isLogged: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
