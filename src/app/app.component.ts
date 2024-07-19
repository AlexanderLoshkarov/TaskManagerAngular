import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketsComponent } from './Tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicketsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-manager';
}
