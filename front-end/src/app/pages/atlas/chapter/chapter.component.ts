import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Chapter } from 'src/app/shared/models/chapter';
import { ChapterService } from 'src/app/shared/services/chapter.service';

@Component({
  selector: 'aql-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
})
export class ChapterComponent implements OnInit {
  title: string = 'Atlas';

  chapters$: Observable<Chapter[]>;
  constructor(private router: Router, private chapterService: ChapterService) {}

  ngOnInit(): void {
    //Obtem uma listagem de capítulos cadastrados na base de dados
    this.chapters$ = this.chapterService.readAll();
  }

  /**
   * Navega para o capítulo selecionado pelo usuário
   * @param chapter Capítulo selecionado pelo usuário
   */
  openChapter(chapter: Chapter) {
    this.router.navigate([`/atlas/${chapter.id}`]);
  }
}
