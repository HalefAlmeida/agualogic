import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { Aquarium } from 'src/app/shared/models/aquarium';
import { AquariumService } from 'src/app/shared/services/aquarium.service';

@Component({
  selector: 'aql-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.css'],
})
export class AquariumComponent implements OnInit {
  aquariums$: Observable<Aquarium[]>;

  constructor(
    private aquariumService: AquariumService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //realiza o primeiro carregamento dos dados na tela
    this.refresh();
  }

  private refresh() {
    this.aquariums$ = this.aquariumService.readAll();
  }

  /**
   * Realiza a exclusão de um registro na base de dados
   * @param recordID Id do registro a ser excluído
   */
  delete(recordID: number) {
    this.aquariumService.delete(recordID).subscribe(
      (response) => {
        console.log('Registro excluído com sucesso');
      },
      (err) => {
        console.log(`Não foi possível realizar a exclusão do registro: ${err}`);
      },
      () => {
        //Atualiza os registros na tela
        this.refresh();
      }
    );
  }

  /**
   * Atualiza um registro na base de dados
   * @param recordID ID do registro a ser atualizado
   */
  edit(recordID: number) {
    this.router.navigateByUrl(`/aquarium/edit/${recordID}`);
  }

  /**
   * Abre uma janela de confirmação para realizar a exclusão do registro
   * @param title Título do dialog
   * @param message Mensagem a ser apresentada no dialog
   * @returns Boolean indicando a confirmação da
   */
  deleteDialog(id: number, title: string, message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: title, message: message },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.delete(id);
      }
    });
  }
}
