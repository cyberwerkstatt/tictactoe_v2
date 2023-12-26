import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-game-main',
  standalone: true,
  imports: [],
  templateUrl: './game-main.component.html',
  styleUrl: './game-main.component.scss',
})
export class GameMainComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.createField();
  }

  createField() {
    const board = this.el.nativeElement.querySelector('#mainContent');
    
    for (let i = 0; i < 9; i++) {
      const cell = this.renderer.createElement('div');
      this.renderer.addClass(cell, 'cell');
      this.renderer.setProperty(cell, 'id', `cell${i}`);
      this.renderer.appendChild(board, cell);
    }
  }
}
