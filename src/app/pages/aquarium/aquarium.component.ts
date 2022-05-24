import { Component, OnInit } from '@angular/core';
import { Aquarium } from 'src/app/shared/models/aquarium';

@Component({
  selector: 'aql-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.css'],
})
export class AquariumComponent implements OnInit {
  aquariums: Aquarium[] = [
    {
      id: 1,
      title: 'Aquário 1',
      description: 'Aquário 1',
      status: true,
    },
    {
      id: 2,
      title: 'Aquário 2',
      description: 'Aquário 2',
      status: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
