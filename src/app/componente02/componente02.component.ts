import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente02',
  templateUrl: './componente02.component.html',
  styleUrls: ['./componente02.component.css']
})
export class Componente02Component implements OnInit {
  marca:string="lamb"
  modello:string="stica"
  textColor:string="blue"
  comment:string="inserisci un commento"

  onClick() {
    this.textColor = "red"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
