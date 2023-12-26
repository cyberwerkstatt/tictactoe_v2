import { Component, OnInit } from '@angular/core';
import { routes } from '../app.routes';
import { Route, Router, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent implements OnInit {

  // Injizieren des Router-Services
  constructor(private router: Router) { }

  ngOnInit() {
    // Initialisierungslogik falls nötig
  }

  loadGame() {
    // Verwendung der navigate-Methode des Router-Services
    this.router.navigate(['/Game']);
  }

}
