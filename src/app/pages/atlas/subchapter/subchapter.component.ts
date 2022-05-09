import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subchapter } from 'src/app/shared/models/subchapter';
import { SubchapterService } from 'src/app/shared/services/subchapter.service';

@Component({
  selector: 'aql-subchapter',
  templateUrl: './subchapter.component.html',
  styleUrls: ['./subchapter.component.css'],
})
export class SubchapterComponent implements OnInit {
  title: string = 'Sub-capítulos';
  subchapters$: Observable<Subchapter[]>;

  constructor(
    private subchapterService: SubchapterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subchapters$ = this.subchapterService.readAll();
  }

  openSubchapter(subchapter: Subchapter) {
    this.router.navigate([`/atlas/subchapter/${subchapter.id}`]);
  }
}
