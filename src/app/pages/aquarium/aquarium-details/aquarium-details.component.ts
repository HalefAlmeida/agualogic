import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AquariumService } from 'src/app/shared/services/aquarium.service';
import { ActivatedRoute } from '@angular/router';
import { Aquarium } from 'src/app/shared/models/aquarium';

@Component({
  selector: 'aql-aquarium-details',
  templateUrl: './aquarium-details.component.html',
  styleUrls: ['./aquarium-details.component.css'],
})
export class AquariumDetailsComponent implements OnInit {
  //Título a ser apresentado no componente. Pode apresentar "Novo" ou "Editar"
  title: string = 'Novo aquário';

  //ID do aquário que foi recebido via URL do componente pai
  aquariumId: any;

  //Formulário do componente
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private aquariumService: AquariumService,
    private actRoute: ActivatedRoute
  ) {
    //Atribuindo ao formulário os campos a serem utilizados e suas respectivas validações
    this.form = this.fb.group({
      id: [null, [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.minLength(3), Validators.maxLength(250)]],
      status: [true, [Validators.required]],
    });
  }

  ngOnInit(): void {
    //Lê o ID presente na URL.
    this.actRoute.paramMap.subscribe({
      next: (params) => {
        this.aquariumId = params.get('id');
      },
    });

    //Se vier um ID via parâmetro, alterar o título do componente
    if (this.aquariumId !== null) {
      this.title = 'Editar aquário';

      //Lê o objeto correspondente ao ID parâmetro
      this.aquariumService.readById(this.aquariumId).subscribe({
        next: (data) => {
          //Após obter os dados, preenche o formulário
          this.form.patchValue({
            id: data.id,
            title: data.title,
            description: data.description,
            status: data.status,
          });
        },
      });
    }
  }

  /**
   * Envia os dados para processamento nos serviços, criando novo registro se o objeto não possuir ID, e atualizando registro existente caso possua ID
   */
  submit() {
    this.aquariumService.save(this.form.value).subscribe({
      next: () => {
        console.log('Registro salvo com sucesso');
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        //Volta para a página anterior
        this.location.back();
      },
    });
  }

  /**
   * Cancela a operação de inclusão ou edição, resetando os valores do formulário e voltando para o componente anterior
   */
  cancel() {
    //Reseta os campos do formulário
    this.form.reset();

    //Volta para a página anterior
    this.location.back();
  }

  /**
   * Provê um conjunto de mensagens de erro a serem apresentados no campo conforme sua validação no FormGroup
   * @param control Form control que terá o erro verificado
   * @returns Mensagem de erro a ser apresentada no campo
   */
  getErrorMessage(control: any) {
    if (this.form.controls[control].hasError('required')) {
      return 'É obrigatório o preenchimento do campo';
    } else if (this.form.controls[control].hasError('minlength')) {
      return 'Existe uma quantidade mínima de caracteres';
    } else if (this.form.controls[control].hasError('maxlength')) {
      return 'Existe uma quantidade máxima de caracteres';
    }

    return this.form.controls[control].hasError('email')
      ? 'Este não é um email válido'
      : 'teste';
  }
}
