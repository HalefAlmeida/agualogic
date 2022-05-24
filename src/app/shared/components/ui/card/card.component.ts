import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aql-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string = '';
  @Input() edit: boolean = false;
  @Input() delete: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
