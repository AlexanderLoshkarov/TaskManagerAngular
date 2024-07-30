import { Component, Injectable } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Ticket } from '../types';
import { TicketsService } from './tickets.service';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';

@Component({
  selector: 'tickets',
  standalone: true,
  imports: [AsyncPipe, AddNewTicketComponent],
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
    console.warn(ticket);
  };

  deleteTicket = (ticket: Ticket) => {
    console.warn(ticket);
  };
}
