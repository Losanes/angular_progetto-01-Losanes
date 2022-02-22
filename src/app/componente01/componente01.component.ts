import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente01',
  templateUrl: './componente01.component.html',
  styleUrls: ['./componente01.component.css']
})
export class Componente01Component implements OnInit {
marca:string="lamb"
modello:string="avent"
textColor:string="blue"

  onClick() {
    this.textColor = "red"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
