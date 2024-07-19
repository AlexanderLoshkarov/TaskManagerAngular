import { Component, Injectable } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Ticket } from '../types';
import { TicketsService } from './tickets.service';

@Component({
  selector: 'tickets',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './tickets.template.html',
  styleUrl: './tickets.styles.css',
})
export class TicketsComponent {
  tickets$!: Observable<Ticket[]>;

  constructor(private ticketsService: TicketsService) {}

  ngOnInit() {
    this.tickets$ = this.ticketsService.getAllTickets();
  }

  editTicket = (ticket: Ticket) => {
    console.log(ticket);
  };

  deleteTicket = (ticket: Ticket) => {
    console.log(ticket);
  };
}
