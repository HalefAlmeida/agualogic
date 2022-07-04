import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aql-aquarium-panel',
  templateUrl: './aquarium-panel.component.html',
  styleUrls: ['./aquarium-panel.component.css'],
})

/*
Para cada aquário cadastrado, ao ser selecionado, abrir componente onde seja possível realizar a inclusão das seguintes informações:

Animais
Plantas
Alertas
Equipamentos
Parâmetros
Históricos
*/
export class AquariumPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
