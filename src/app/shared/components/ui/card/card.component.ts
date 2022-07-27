import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() disabled: boolean = false;
  @Output() hasDeleted = new EventEmitter<boolean>();
  @Output() editing = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  deleteRecord() {
    //Ao clicar no botão delete, emite boolean para a exclusão ao componente pai
    this.hasDeleted.emit(true);
  }

  editRecord() {
    this.editing.emit(true);
  }
}
