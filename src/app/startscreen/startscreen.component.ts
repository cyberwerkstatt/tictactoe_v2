import { Component, OnInit } from '@angular/core';
import { routes } from '../app.routes';
import { Route, Router, RouterOutlet } from '@angular/router';
import { GameMainComponent } from '../game-main/game-main.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [RouterOutlet, GameMainComponent, CommonModule],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent implements OnInit {

  view:boolean = false;
  viewStart:boolean = true;

  // Injizieren des Router-Services
  constructor(private router: Router) { }

  ngOnInit() {
    // Initialisierungslogik falls nötig
  }

  loadGame() {
    // Verwendung der navigate-Methode des Router-Services
    this.router.navigate(['/Game']);
    this.view = true;
    this.viewStart = false;
  }

}
