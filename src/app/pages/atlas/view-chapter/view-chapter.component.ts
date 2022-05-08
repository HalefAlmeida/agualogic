import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Chapter } from 'src/app/shared/models/chapter';
import { ChapterService } from 'src/app/shared/services/chapter.service';

@Component({
  selector: 'aql-view-chapter',
  templateUrl: './view-chapter.component.html',
  styleUrls: ['./view-chapter.component.css'],
})
export class ViewChapterComponent implements OnInit {
  chapterId: any;
  chapter: Chapter;
  constructor(
    private actRoute: ActivatedRoute,
    private chapterService: ChapterService
  ) {}

  ngOnInit(): void {
    //Obtém od ID do capítulo enviado via URL pelo componente pai
    this.actRoute.paramMap.subscribe({
      next: (params) => {
        this.chapterId = params.get('id');
      },
    });

    //Obtém o objeto correspondente ao ID passado como parâmetro na URL e o atribui a variável chapter
    this.chapterService.readById(this.chapterId).subscribe({
      next: (data) => {
        this.chapter = data;
        console.log(this.chapter);
      },
    });
  }
}
