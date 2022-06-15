import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aql-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  appName: string = 'AQUALOGIC';

  constructor() {}

  ngOnInit(): void {}
}
