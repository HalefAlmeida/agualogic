import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chapter } from 'src/app/shared/models/chapter';

@Component({
  selector: 'aql-atlas',
  templateUrl: './atlas.component.html',
  styleUrls: ['./atlas.component.css'],
})
export class AtlasComponent implements OnInit {
  chapters: Chapter[] = [
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
    {
      id: 1,
      chapter: 'Peixes',
      cover: 'fish.jpeg',
      active: true,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openChapter(chapter: any) {
    this.router.navigate([`/atlas/${chapter}`]);
  }
}
