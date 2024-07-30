import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket, TicketNew } from '../types';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  constructor(private http: HttpClient) {}

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`http://localhost:5239/tickets`);
  }

  addNewTicket(ticketNew: TicketNew): Observable<string> {
    return this.http.post<string>(
      `http://localhost:7094/api/AddNewTicketFunction`,
      ticketNew
    );
  }
}
