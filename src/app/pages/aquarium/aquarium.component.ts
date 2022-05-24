import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aquarium } from 'src/app/shared/models/aquarium';
import { AquariumService } from 'src/app/shared/services/aquarium.service';

@Component({
  selector: 'aql-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.css'],
})
export class AquariumComponent implements OnInit {
  aquariums$: Observable<Aquarium[]>;

  constructor(private aquariumService: AquariumService) {}

  ngOnInit(): void {
    this.aquariums$ = this.aquariumService.readAll();
  }
}
